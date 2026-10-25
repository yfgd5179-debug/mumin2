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

Dış bağlantılar listelenir ama hata sayılmaz (ağ bağımlılığı olmasın diye).
Hata varsa çıkış kodu 1 döner.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

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
        if not (dosya.parent / hedef).resolve().exists():
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

kullanilmayan = set().union(*dil_anahtarlari.values()) - kullanilan if dil_anahtarlari else set()
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
