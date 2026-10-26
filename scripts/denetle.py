#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Depo bütünlük denetimi (CI için).

Kontrol edilenler:
  1. HTML'deki yerel href/src hedefleri gerçekten var mı?
  2. Kullanılan her data-i18n anahtarı 3 dilde de tanımlı mı?
  3. Sözlükler arasında eksik/fazla anahtar var mı (dil tutarlılığı)?
  4. Her sayfada <title>, charset, viewport, lang var mı?
  5. Aynı sayfada yinelenen id var mı?
  6. <img> etiketlerinde alt var mı?
  7. JS'ten çağrılan çeviri anahtarı da "kullanılmış" sayılır
     (durumYaz("form.done") gibi — HTML'de olmayan anahtarlar için)
  8. canonical ile og:url aynı mı?
  9. hreflang kümesi tam mı (tr/en/ar + x-default, hepsi ?lang= ile)?
 10. sitemap.xml yolları gerçek dosyalara mı? (404.html sitemap'te OLMAMALI)
 11. robots.txt Sitemap satırı kendi domainimize mi?
 12. og:image kendi sitemizse dosyası depoda var mı?
 13. site.webmanifest ikonları var mı + display uygun mu (PWA)
 14. sw.js varsa script.js'te kaydı var, tersi de geçerli mi?

Dış bağlantılar listelenir ama hata sayılmaz (ağ bağımlılığı olmasın diye).
Hata varsa çıkış kodu 1 döner.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

try:  # Windows terminallerinde UTF-8 çıktısı
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = Path(__file__).resolve().parent.parent
HTML_DOSYALARI = sorted(p for p in KOK.glob("*.html"))
DILLER = ("tr", "en", "ar")

hatalar: list[str] = []
uyarilar: list[str] = []


def oku(p: Path) -> str:
    return p.read_text(encoding="utf-8")


# ---------------------------------------------------------------- 1) bağlantılar
YEREL = re.compile(r"""(?:href|src)\s*=\s*["']([^"']+)["']""", re.I)
DIŞ_PREFIX = ("http://", "https://", "//", "mailto:", "tel:", "data:", "javascript:")

dis_baglantilar: set[str] = set()

for dosya in HTML_DOSYALARI:
    metin = oku(dosya)
    for url in YEREL.findall(metin):
        u = url.strip()
        if u.startswith(DIŞ_PREFIX):
            dis_baglantilar.add(u)
            continue
        if u.startswith("#"):
            continue
        hedef = u.split("#", 1)[0].split("?", 1)[0]
        if not hedef:
            continue
        # kökten gelen yollar (/dil.html) depo köküne göre çözümlenir
        if hedef.startswith("/"):
            p = (KOK / hedef.lstrip("/")).resolve()
        else:
            p = (dosya.parent / hedef).resolve()
        if not p.exists():
            hatalar.append(f"{dosya.name}: bulunamayan yerel hedef -> {u}")

# ------------------------------------------------------- 2-3) i18n anahtar tutarlılığı
def anahtar_seti(kaynak: str) -> set[str]:
    return set(re.findall(r"""["']([A-Za-z0-9_.\-]+)["']\s*:""", kaynak))


dil_anahtarlari: dict[str, set[str]] = {}

if not (KOK / "script.js").exists():
    hatalar.append("script.js yok")
else:
    js = oku(KOK / "script.js")
    dik = js.find("const DICT")
    if dik == -1:
        hatalar.append("script.js içinde 'const DICT' bulunamadı")
    else:
        bas = js.find("{", dik)
        derinlik, i = 0, bas
        while i < len(js):
            if js[i] == "{":
                derinlik += 1
            elif js[i] == "}":
                derinlik -= 1
                if derinlik == 0:
                    break
            i += 1
        dict_kaynak = js[bas : i + 1]

        for dil in DILLER:
            m = re.search(rf"\b{dil}\s*:\s*\{{", dict_kaynak)
            if not m:
                hatalar.append(f"DICT içinde '{dil}' bloğu yok")
                dil_anahtarlari[dil] = set()
                continue
            b2 = dict_kaynak.find("{", m.start())
            d2, j = 0, b2
            while j < len(dict_kaynak):
                if dict_kaynak[j] == "{":
                    d2 += 1
                elif dict_kaynak[j] == "}":
                    d2 -= 1
                    if d2 == 0:
                        break
                j += 1
            dil_anahtarlari[dil] = anahtar_seti(dict_kaynak[b2 : j + 1])

    # dil tutarlılığı
    if len(dil_anahtarlari) == len(DILLER):
        temel = dil_anahtarlari[DILLER[0]]
        for dil in DILLER[1:]:
            eksik = temel - dil_anahtarlari[dil]
            fazla = dil_anahtarlari[dil] - temel
            for k in sorted(eksik):
                hatalar.append(f"DICT.{dil} içinde eksik anahtar: {k}")
            for k in sorted(fazla):
                hatalar.append(f"DICT.{dil} içinde fazladan anahtar: {k}")

# HTML'de kullanılan anahtarlar
kullanilan: set[str] = set()
I18N = re.compile(r"""data-i18n([a-z\-]*)\s*=\s*["']([^"']+)["']""")

for dosya in HTML_DOSYALARI:
    for ek, deger in I18N.findall(oku(dosya)):
        if ek == "-attr":
            for cift in deger.split(","):
                if ":" in cift:
                    kullanilan.add(cift.split(":", 1)[1].strip())
        else:
            kullanilan.add(deger.strip())

for dil, anahtarlar in dil_anahtarlari.items():
    for k in sorted(kullanilan - anahtarlar):
        hatalar.append(f"'{k}' HTML'de kullanılıyor ama DICT.{dil} içinde yok")

# (7) JS'ten çağrılan anahtarlar da kullanılmıştır — ör. durumYaz("form.done").
# DICT içindeki tanımlar ("key": ...) bu taramadan düşülür, sayaç anlamlı kalır.
tum_anahtarlar = set().union(*dil_anahtarlari.values()) if dil_anahtarlari else set()
if (KOK / "script.js").exists():
    js_kaynak = oku(KOK / "script.js")
    for eslesme in re.finditer(r"""["']([A-Za-z0-9_.\-]+)["']""", js_kaynak):
        k = eslesme.group(1)
        if k not in tum_anahtarlar:
            continue
        if js_kaynak[eslesme.end() : eslesme.end() + 1] == ":":   # tanım satırı
            continue
        kullanilan.add(k)

kullanilmayan = tum_anahtarlar - kullanilan
for k in sorted(kullanilmayan):
    uyarilar.append(f"kullanılmayan çeviri anahtarı: {k}")

# ------------------------------------------------------------ 4-5-6) temel HTML kuralları
ID_RE = re.compile(r"""\bid\s*=\s*["']([^"']+)["']""")
IMG_RE = re.compile(r"<img\b[^>]*>", re.I)
IMG_ALT_RE = re.compile(r"""\balt\s*=\s*["']""", re.I)

ZORUNLU = [
    ("<title", "<title>"),
    ('charset="utf-8"', "charset=utf-8"),
    ('name="viewport"', "viewport meta"),
    ("<html", "<html ... lang>"),
]

for dosya in HTML_DOSYALARI:
    metin = oku(dosya)
    dusuk = metin.lower()

    for ihtiyac, ad in ZORUNLU:
        if ihtiyac.lower() not in dusuk:
            hatalar.append(f"{dosya.name}: {ad} eksik")

    # lang niteliği
    m_html = re.search(r"<html\b[^>]*>", metin, re.I)
    if m_html and not re.search(r"\blang\s*=", m_html.group(0), re.I):
        hatalar.append(f"{dosya.name}: <html> üzerinde lang niteliği yok")

    # yinelenen id
    gecenler: set[str] = set()
    for i in ID_RE.findall(metin):
        if i in gecenler:
            hatalar.append(f"{dosya.name}: yinelenen id -> {i}")
        gecenler.add(i)

    # görsellerde alt
    for gorsel in IMG_RE.findall(metin):
        if not IMG_ALT_RE.search(gorsel):
            hatalar.append(f"{dosya.name}: <img> etiketinde alt niteliği yok")

# ------------------------------------------------ 8-14) SEO / PWA kuralları
SITE = "https://engmumin.work.gd"


def etiket_bul(metin: str, etiket: str, nitelik: str, deger: str) -> str | None:
    """<meta>/<link> blokları içinde niteliği verilen etiketin href/content değerini döndürür."""
    for blok in re.findall(rf"<{etiket}\b[^>]*>", metin, re.I):
        if re.search(rf"""{nitelik}\s*=\s*["']{re.escape(deger)}["']""", blok, re.I):
            m = re.search(r"""(?:href|content)\s*=\s*["']([^"']+)["']""", blok, re.I)
            if m:
                return m.group(1)
    return None


index_metin = oku(KOK / "index.html") if (KOK / "index.html").exists() else ""

# 8) canonical == og:url
canonical = etiket_bul(index_metin, "link", "rel", "canonical")
og_url = etiket_bul(index_metin, "meta", "property", "og:url")
if not canonical:
    hatalar.append("index.html: canonical link yok")
if not og_url:
    hatalar.append("index.html: og:url yok")
if canonical and og_url and canonical.rstrip("/") != og_url.rstrip("/"):
    hatalar.append(f"canonical != og:url -> {canonical} / {og_url}")

# 9) hreflang kümesi (tr/en/ar + x-default, gerçek ?lang= sürümleri)
hl: dict[str, str] = {}
for blok in re.findall(r"""<link\b[^>]*>""", index_metin, re.I):
    if not re.search(r"""rel\s*=\s*["']alternate["']""", blok, re.I):
        continue
    mh = re.search(r"""hreflang\s*=\s*["']([^"']+)["']""", blok, re.I)
    mi = re.search(r"""href\s*=\s*["']([^"']+)["']""", blok, re.I)
    if mh and mi:
        hl[mh.group(1).lower()] = mi.group(1)

eksik_hl = {"tr", "en", "ar", "x-default"} - set(hl)
if eksik_hl:
    hatalar.append("index.html: eksik hreflang -> " + ", ".join(sorted(eksik_hl)))
for kod, adres in hl.items():
    if kod == "x-default":
        continue
    # Varsayılan dil canonical kökü gösterebilir (tr => /); diğerleri ?lang= ister
    if "lang=" in adres:
        continue
    if not canonical or adres.rstrip("/") != canonical.rstrip("/"):
        hatalar.append(f"hreflang {kod} ne ?lang= ne de canonical gösteriyor -> {adres}")

# 10) sitemap yolları gerçek dosyalara mı? (404 dahil edilemez)
sm = KOK / "sitemap.xml"
if not sm.exists():
    hatalar.append("sitemap.xml yok")
else:
    for loc in re.findall(r"<loc>(.*?)</loc>", oku(sm), re.I):
        yol = loc.strip()
        if not yol.startswith(SITE):
            uyarilar.append(f"sitemap.xml: beklenmeyen alan adı -> {yol}")
            continue
        yol = yol[len(SITE):] or "/"
        if not yol.endswith(".html"):
            continue
        dosya = yol.lstrip("/")
        if not (KOK / dosya).exists():
            hatalar.append(f"sitemap.xml: bulunamayan sayfa -> {yol}")
        if dosya.lower() == "404.html":
            hatalar.append("sitemap.xml: 404.html sitemap'te olmamalı (noindex)")

# 11) robots.txt Sitemap satırı kendi domainimiz mi
rb = KOK / "robots.txt"
if not rb.exists():
    hatalar.append("robots.txt yok")
else:
    for satir in oku(rb).splitlines():
        if satir.lower().startswith("sitemap:"):
            adres = satir.split(":", 1)[1].strip()
            if not adres.startswith(SITE):
                hatalar.append(f"robots.txt: beklenmeyen Sitemap adresi -> {adres}")

# 12) og:image dosyası depoda mı
og_gorsel = etiket_bul(index_metin, "meta", "property", "og:image")
if og_gorsel and og_gorsel.startswith(SITE):
    yerel = og_gorsel[len(SITE):].split("?")[0].lstrip("/")
    if yerel and not (KOK / yerel).exists():
        hatalar.append(f"og:image dosyası depoda yok -> {yerel}")

# 13) PWA manifestosu: ikonlar mevcut, display uygun
mf = KOK / "site.webmanifest"
if not mf.exists():
    uyarilar.append("site.webmanifest yok (PWA kurulamaz)")
else:
    try:
        manifest = json.loads(oku(mf))
    except Exception as hata:
        manifest = None
        hatalar.append(f"site.webmanifest geçersiz JSON: {hata}")
    if isinstance(manifest, dict):
        if manifest.get("display") not in ("standalone", "minimal-ui", "fullscreen", "browser"):
            hatalar.append(f"manifest display uyumsuz -> {manifest.get('display')}")
        boyutlar = set()
        for ikon in manifest.get("icons", []):
            kaynak = str(ikon.get("src", "")).split("?")[0]
            if kaynak.startswith(SITE):
                kaynak = kaynak[len(SITE):]
            if not (KOK / kaynak.lstrip("/")).exists():
                hatalar.append(f"manifest ikonu depoda yok -> {ikon.get('src')}")
            boyutlar.add(str(ikon.get("sizes", "")))
        if manifest.get("display") == "standalone" and not ({"192x192", "512x512"} <= boyutlar):
            hatalar.append(f"PWA için 192/512 ikon gerekli (şu an: {sorted(boyutlar)})")

# 14) service worker <-> kayıt tutarlılığı
sw_var = (KOK / "sw.js").exists()
js_metin = oku(KOK / "script.js") if (KOK / "script.js").exists() else ""
kayit_var = "serviceWorker" in js_metin and ".register(" in js_metin
if sw_var and not kayit_var:
    hatalar.append("sw.js var ama script.js'te serviceWorker.register yok")
if kayit_var and not sw_var:
    hatalar.append("script.js serviceWorker.register çağırıyor ama sw.js yok")

# ---------------------------------------------------------------------------- rapor
if uyarilar:
    print("Uyarılar:")
    for u in uyarilar:
        print(f"  - {u}")
    print()

if hatalar:
    print(f"HATALAR ({len(hatalar)}):")
    for h in hatalar:
        print(f"  x {h}")
    sys.exit(1)

print(f"OK — {len(HTML_DOSYALARI)} sayfa, {len(kullanilan)} çeviri anahtarı, "
      f"{len(dis_baglantilar)} dış bağlantı denetlendi.")
