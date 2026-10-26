<#
    gorsel-uret.ps1
    ----------------
    Sosyal medya ve ikon gorsellerini System.Drawing ile uretir:

        og.png                  1200 x 630  (og:image / summary_large_image)
        apple-touch-icon.png     180 x 180  (iOS ana ekran ikonu)
        favicon.ico               48 + 32px (ICO kapliginda PNG)
        icon-192.png             192 x 192  (PWA, "any" amaclı)
        icon-512.png             512 x 512  (PWA, "any" amaclı)
        icon-maskable-192.png    192 x 192  (PWA, maskeli - guvenli alan)
        icon-maskable-512.png    512 x 512  (PWA, maskeli - guvenli alan)

    Not: Bu betik bilincli olarak yalnizca ASCII icerir; Windows PowerShell 5.1
    BOM olmayan .ps1 dosyalarini ANSI okudugu icin Turkce karakterler
    [char] kodlari ile kurulur.

    Kullanim:
        powershell -NoProfile -ExecutionPolicy Bypass -File scripts\gorsel-uret.ps1
#>

[CmdletBinding()]
param([string]$Cikti = "")

if ([string]::IsNullOrWhiteSpace($Cikti)) { $Cikti = Split-Path -Parent $PSScriptRoot }

Add-Type -AssemblyName System.Drawing

# ---------------- metinler (ANSI-guvenli) ----------------
$U   = [char]0x00FC   # u umlaut
$CC  = [char]0x00E7   # c cedilla
$SH  = [char]0x015F   # s cedilla
$AA  = [char]0x00E2   # a circumflex
$DOT = [char]0x00B7   # orta nokta

$AD     = "M" + $U + "min"
$ALT    = "Uygulama & Ara" + $CC + " Geli" + $SH + "tiricisi"
$ETIKET = "Yapay Zek" + $AA + " " + $DOT + " Android " + $DOT + " Web " + $DOT + " Harita " + $DOT + " ESP32"
$ALAN   = "engmumin.work.gd"
$DILLER = "TR " + $DOT + " EN " + $DOT + " AR"

# ---------------- renkler ----------------
$YESIL    = [System.Drawing.Color]::FromArgb(255, 16, 185, 129)
$MUREKKEP = [System.Drawing.Color]::FromArgb(255, 4, 18, 13)
$BG1      = [System.Drawing.Color]::FromArgb(255, 11, 17, 23)
$BG2      = [System.Drawing.Color]::FromArgb(255, 17, 31, 44)
$FG       = [System.Drawing.Color]::FromArgb(255, 230, 237, 243)
$MUTED    = [System.Drawing.Color]::FromArgb(255, 139, 155, 171)
$MUTED2   = [System.Drawing.Color]::FromArgb(255, 110, 127, 145)

# ---------------- yardimcilar ----------------
function Yeni-Fnt([string]$aile, [float]$olcu, [System.Drawing.FontStyle]$stil) {
    New-Object System.Drawing.Font -ArgumentList @($aile, $olcu, $stil, [System.Drawing.GraphicsUnit]::Pixel)
}

function Yeni-Fircat([System.Drawing.Color]$renk) {
    New-Object System.Drawing.SolidBrush -ArgumentList $renk
}

function Yeni-Yuvarlak([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
    $p = New-Object System.Drawing.Drawing2D.GraphicsPath
    [float]$d = $r * 2
    [void]$p.AddArc($x, $y, $d, $d, 180, 90)
    [void]$p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    [void]$p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    [void]$p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    [void]$p.CloseFigure()
    $p
}

# Metni verilen genislikte ortalar, sol ust kose y = $y olacak sekilde ciz
function Ciz-Ortala($g, [string]$metin, $font, $fircat, [float]$y, [float]$genislik) {
    [System.Drawing.SizeF]$sz = $g.MeasureString($metin, $font)
    [float]$x = ($genislik - [float]$sz.Width) / 2
    $g.DrawString($metin, $font, $fircat, $x, $y)
}

# Metni verilen kutuda tam ortalar (marka isareti, ikonlar)
function Ciz-Orta-Kutu($g, [string]$metin, $font, $fircat, [float]$kx, [float]$ky, [float]$kw, [float]$kh) {
    [System.Drawing.SizeF]$sz = $g.MeasureString($metin, $font)
    [float]$x = $kx + ([float]$kw - [float]$sz.Width) / 2
    [float]$y = $ky + ([float]$kh - [float]$sz.Height) / 2
    $g.DrawString($metin, $font, $fircat, $x, $y)
}

function Yeni-Tuval([int]$w, [int]$h) {
    $bmp = New-Object System.Drawing.Bitmap -ArgumentList @($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode    = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.PixelOffsetMode  = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $bmp
    $g
}

# ---------------- 1) og.png  (1200 x 630) ----------------
function Uret-OG([string]$yol) {
    [int]$W = 1200
    [int]$H = 630
    $ar = Yeni-Tuval $W $H
    $bmp = $ar[0]
    $g   = $ar[1]

    $dik = New-Object System.Drawing.Rectangle -ArgumentList @(0, 0, $W, $H)
    $gec = New-Object System.Drawing.Drawing2D.LinearGradientBrush -ArgumentList @($dik, $BG1, $BG2, 40.0)
    $g.FillRectangle($gec, $dik)

    $g.FillEllipse((Yeni-Fircat ([System.Drawing.Color]::FromArgb(46, 16, 185, 129))), 380, -260, 440, 440)
    $g.FillEllipse((Yeni-Fircat ([System.Drawing.Color]::FromArgb(28, 56, 189, 248))), 760, 380, 420, 420)

    $fYesil = Yeni-Fircat $YESIL
    $fInk   = Yeni-Fircat $MUREKKEP
    $fFG    = Yeni-Fircat $FG
    $fMut   = Yeni-Fircat $MUTED
    $fMut2  = Yeni-Fircat $MUTED2

    # marka kutusu
    [float]$kutuX = ($W - 118) / 2
    [float]$kutuY = 56
    $yolK = Yeni-Yuvarlak $kutuX $kutuY 118 118 30
    $g.FillPath($fYesil, $yolK)

    $fM = Yeni-Fnt 'Segoe UI' 62 ([System.Drawing.FontStyle]::Bold)
    Ciz-Orta-Kutu $g 'M.' $fM $fInk $kutuX $kutuY 118 118

    # alan adi / baslik / alt satir
    $fAlan = Yeni-Fnt 'Segoe UI' 30 ([System.Drawing.FontStyle]::Bold)
    Ciz-Ortala $g $ALAN $fAlan $fYesil 196 $W

    $fBas = Yeni-Fnt 'Segoe UI' 92 ([System.Drawing.FontStyle]::Bold)
    Ciz-Ortala $g $AD $fBas $fFG 236 $W

    $fAlt = Yeni-Fnt 'Segoe UI' 34 ([System.Drawing.FontStyle]::Regular)
    Ciz-Ortala $g $ALT $fAlt $fMut 366 $W

    # ayirici cizgi
    $kalem = New-Object System.Drawing.Pen -ArgumentList @($YESIL, 4.0)
    $g.DrawLine($kalem, [float](($W - 260) / 2), 448.0, [float](($W + 260) / 2), 448.0)

    # etiketler + dil rozeti
    $fEti = Yeni-Fnt 'Segoe UI' 25 ([System.Drawing.FontStyle]::Regular)
    Ciz-Ortala $g $ETIKET $fEti $fMut2 474 $W

    $fDil = Yeni-Fnt 'Segoe UI' 22 ([System.Drawing.FontStyle]::Bold)
    Ciz-Ortala $g $DILLER $fDil $fYesil 542 $W

    $bmp.Save($yol, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output '  og.png                1200x630'
}

# ---------------- 2) apple-touch-icon.png (180 x 180) ----------------
function Uret-Touch([string]$yol) {
    $ar = Yeni-Tuval 180 180
    $bmp = $ar[0]
    $g   = $ar[1]
    $g.Clear($YESIL)

    $f = Yeni-Fnt 'Segoe UI' 96 ([System.Drawing.FontStyle]::Bold)
    Ciz-Orta-Kutu $g 'M.' $f (Yeni-Fircat $MUREKKEP) 0 0 180 180

    $bmp.Save($yol, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output '  apple-touch-icon.png   180x180'
}

# ---------------- 3) PWA ikonlari (192 + 512, duz + maskeli) ----------------
# "any"    : saydam altlik + yuvarlak yesil karo (favicon ile ayni marka)
# "maskable": tam kanama yesil zemin, "M." guvenli alanin (%80 daire) icinde
function Uret-PWA([string]$yol, [int]$n, [bool]$maskeli) {
    $ar = Yeni-Tuval $n $n
    $bmp = $ar[0]
    $g   = $ar[1]

    if ($maskeli) {
        $g.Clear($YESIL)
        # %80 guvenli daire icinde kalmalı: yuzde 40 font => cevre ~0.35n < 0.40n
        $f = Yeni-Fnt 'Segoe UI' ([float]($n * 0.40)) ([System.Drawing.FontStyle]::Bold)
        Ciz-Orta-Kutu $g 'M.' $f (Yeni-Fircat $MUREKKEP) 0 0 ([float]$n) ([float]$n)
    }
    else {
        [float]$r = [int]($n * 0.24)
        $yolK = Yeni-Yuvarlak 0.0 0.0 ([float]$n) ([float]$n) $r
        $g.FillPath((Yeni-Fircat $YESIL), $yolK)
        $f = Yeni-Fnt 'Segoe UI' ([float]($n * 0.50)) ([System.Drawing.FontStyle]::Bold)
        Ciz-Orta-Kutu $g 'M.' $f (Yeni-Fircat $MUREKKEP) 0 0 ([float]$n) ([float]$n)
    }

    $bmp.Save($yol, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    if ($maskeli) { Write-Output "  $((Split-Path -Leaf $yol))  ${n}x${n} maskable" }
    else          { Write-Output "  $((Split-Path -Leaf $yol))  ${n}x${n}" }
}

# ---------------- 4) favicon.ico (48 + 32) ----------------
function Uret-Favicon([string]$yol) {
    $boyutlar = @(48, 32)
    $parcalar = @()

    foreach ($n in $boyutlar) {
        $ar = Yeni-Tuval $n $n
        $bmp = $ar[0]
        $g   = $ar[1]
        $g.Clear([System.Drawing.Color]::Transparent)

        [float]$r = [int]($n * 0.24)
        $yolK = Yeni-Yuvarlak 0.0 0.0 ([float]$n) ([float]$n) $r
        $g.FillPath((Yeni-Fircat $YESIL), $yolK)

        $f = Yeni-Fnt 'Segoe UI' ([float][int]($n * 0.50)) ([System.Drawing.FontStyle]::Bold)
        Ciz-Orta-Kutu $g 'M.' $f (Yeni-Fircat $MUREKKEP) 0 0 ([float]$n) ([float]$n)

        $g.Dispose()

        $ms = New-Object System.IO.MemoryStream
        $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        $parcalar += , @($ms.ToArray(), $n, $n)
        $ms.Dispose()
    }

    # ICO kabagi: 6 bayt baslik + bayt/kayit + PNG verileri
    $fs = New-Object System.IO.FileStream -ArgumentList @($yol, [System.IO.FileMode]::Create)
    $bw = New-Object System.IO.BinaryWriter -ArgumentList $fs
    $bw.Write([uint16]0)                    # reserved
    $bw.Write([uint16]1)                    # type = icon
    $bw.Write([uint16]$parcalar.Count)      # count

    [int]$ofset = 6 + (16 * $parcalar.Count)
    foreach ($p in $parcalar) {
        $bw.Write([byte]$p[1])              # genislik
        $bw.Write([byte]$p[2])              # yukseklik
        $bw.Write([byte]0)                  # renk sayisi
        $bw.Write([byte]0)                  # rezerve
        $bw.Write([uint16]1)                # planlar
        $bw.Write([uint16]32)               # bit/piksel
        $bw.Write([uint32]$p[0].Length)     # veri boyutu
        $bw.Write([uint32]$ofset)           # veri ofseti
        $ofset += $p[0].Length
    }
    foreach ($p in $parcalar) { $bw.Write([byte[]]$p[0]) }

    $bw.Flush()
    $bw.Dispose()
    $fs.Dispose()
    Write-Output '  favicon.ico            48 + 32 px'
}

# ---------------- calistir ----------------
if (-not (Test-Path -LiteralPath $Cikti)) { New-Item -ItemType Directory -Path $Cikti | Out-Null }

Write-Output "Gorseller uretiliyor -> $Cikti"
Uret-OG      (Join-Path $Cikti 'og.png')
Uret-Touch   (Join-Path $Cikti 'apple-touch-icon.png')
Uret-Favicon (Join-Path $Cikti 'favicon.ico')
Uret-PWA     (Join-Path $Cikti 'icon-192.png')          192 $false
Uret-PWA     (Join-Path $Cikti 'icon-512.png')          512 $false
Uret-PWA     (Join-Path $Cikti 'icon-maskable-192.png') 192 $true
Uret-PWA     (Join-Path $Cikti 'icon-maskable-512.png') 512 $true
Write-Output 'Tamam.'
