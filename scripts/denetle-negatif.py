#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
denetle-negatif.py — denetle.py'nin YENİ kontrollerinin gerçekten çalıştığını kanıtlar.

Her denemede dosyaları bozar, denetimi çalıştırır ve beklenen hatayı görür;
sonunda dosyalar bayt düzeyinde GERİ ALINIR (satır sonu/bom kaybı olmaz).
Bir kontrol hata üretmezse çıkış kodu 1 döner — yani CI'a eklenebilir.

UYARI: Depodaki dosyaları geçici olarak değiştirir. Otomatik güncelleme
izleyicisi çalışırken bu betiği çalıştırmayın (betik kendisi de bunu kontrol
eder ve vazgeçer).

Kullanım:
    python scripts\\denetle-negatif.py
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = Path(__file__).resolve().parent.parent
DENETLE = [sys.executable, str(KOK / "scripts" / "denetle.py")]

# izleyicinin kendi komut satırında bu dize TÜMLEŞİK geçmemeli (yanlış pozitif)
IZLEYICI = "otomatik" + "-guncelleme.ps1"


def izleyici_calisiyor() -> bool:
    """Arka planda otomatik-guncelleme.ps1 var mı? (varsa vazgeç)"""
    try:
        komut = (
            "Get-CimInstance Win32_Process -Filter \"Name='powershell.exe'\" | "
            "Where-Object { $_.CommandLine -like '*" + IZLEYICI + "*' -and "
            "$_.CommandLine -notlike '*Get-CimInstance*' } | "
            "Select-Object -ExpandProperty ProcessId"
        )
        cikti = subprocess.run(
            ["powershell", "-NoProfile", "-Command", komut],
            capture_output=True, encoding="utf-8", errors="replace", timeout=30,
        ).stdout
        return bool(cikti.strip())
    except Exception:
        return False


def calistir() -> tuple[int, str]:
    r = subprocess.run(DENETLE, capture_output=True, encoding="utf-8", errors="replace")
    return r.returncode, (r.stdout or "") + (r.stderr or "")


basarisiz: list[str] = []


def dene(ad: str, dosya: str, degistir, beklenen: str) -> None:
    yol = KOK / dosya
    orijinal = yol.read_bytes()          # bayt düzeyinde: CRLF/LF aynen korunur
    try:
        metin = orijinal.decode("utf-8")
        yeni = degistir(metin)
        if yeni == metin:
            print(f"  !! {ad}: DEGISIKLIK UYGULANMADI (betik guncellenmeli)")
            basarisiz.append(ad)
            return
        yol.write_bytes(yeni.encode("utf-8"))
        kod, cikti = calistir()
        satir = next((s.strip() for s in cikti.splitlines() if beklenen in s), "")
        if kod != 0 and satir:
            print(f"  OK  {ad}: patladi -> {satir}")
        elif kod != 0:
            print(f"  ~?  {ad}: hata verdi ama beklenen mesaj yok -> {cikti.strip()[:150]}")
        else:
            print(f"  XX  {ad}: HATA VERMEDI (kontrol calismiyor)")
            basarisiz.append(ad)
    finally:
        yol.write_bytes(orijinal)        # ne olursa olsun geri al


if izleyici_calisiyor():
    print("VAGGEDIM: otomatik guncelleme izleyicisi calisiyor.")
    print("Once durdurun (scripts\\dur.cmd), sonra tekrar calistirin.")
    sys.exit(2)


dene("8  canonical != og:url", "index.html",
     lambda s: s.replace('rel="canonical" href="https://engmumin.work.gd/"',
                         'rel="canonical" href="https://engmumin.work.gd/FARKLI"'),
     "canonical != og:url")

dene("9  eksik hreflang (ar)", "index.html",
     lambda s: s.replace('<link rel="alternate" hreflang="ar" href="https://engmumin.work.gd/?lang=ar">', ""),
     "eksik hreflang")

dene("10 sitemap'e 404.html", "sitemap.xml",
     lambda s: s.replace("</urlset>",
                         "  <url><loc>https://engmumin.work.gd/404.html</loc></url>\n</urlset>"),
     "404.html sitemap'te olmamalı")

dene("11 robots yanlis Sitemap", "robots.txt",
     lambda s: s.replace("Sitemap: https://engmumin.work.gd/sitemap.xml",
                         "Sitemap: https://baska-site.com/sitemap.xml"),
     "beklenmeyen Sitemap")

dene("12 og:image dosyasi yok", "index.html",
     lambda s: s.replace('property="og:image" content="https://engmumin.work.gd/og.png"',
                         'property="og:image" content="https://engmumin.work.gd/olmayan.png"'),
     "og:image dosyası depoda yok")

dene("13a 512px ikonlar silindi (standalone 192+512 ister)", "site.webmanifest",
     lambda s: "\n".join(l for l in s.splitlines() if "512x512" not in l),
     "192/512 ikon gerekli")

dene("13b manifest ikonu sil", "site.webmanifest",
     lambda s: s.replace('"src": "/icon-192.png"', '"src": "/olmayan-ikon.png"'),
     "manifest ikonu depoda yok")

dene("14  script.js'te SW kaydi silindi", "script.js",
     lambda s: s.replace('navigator.serviceWorker.register("sw.js")', "void 0"),
     "serviceWorker.register yok")

print()
if basarisiz:
    print("BASARISIZ:", ", ".join(basarisiz))
    sys.exit(1)
print("TUM NEGATIF TESTLER GECTI")
