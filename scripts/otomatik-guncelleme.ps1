<#
    otomatik-guncelleme.ps1
    -----------------------
    Calisma dizinindeki (repo kokunde) degisiklikleri belirli araliklarla kontrol eder;
    fark varsa otomatik olarak `git add -A` + `git commit` yapar ve remote'a push eder.

    Kullanim:
      powershell -File otomatik-guncelleme.ps1                # sonsuz dongu (varsayilan)
      powershell -File otomatik-guncelleme.ps1 -TekGecis      # bir kez calisip cik
      powershell -File otomatik-guncelleme.ps1 -AralikSaniye 30
      powershell -File otomatik-guncelleme.ps1 -ElleMesaj "yeni kart eklendi"
#>

[CmdletBinding()]
param(
    [int]    $AralikSaniye = 15,     # kac saniyede bir kontrol edilsin
    [string] $ElleMesaj    = "",     # bos birakilirsa zaman damgali otomatik mesaj
    [int]    $PushDeneme   = 3,      # push basarisiz olursa kac deneme
    [switch] $TekGecis                      # sadece bir kez calis
)

$ErrorActionPreference = 'SilentlyContinue'

# scripts/ klasorunde duruyoruz -> repo kok dizini
$Repo = Split-Path -Parent $PSScriptRoot
$Log  = Join-Path $Repo '.git\otomatik-guncelleme.log'

# Kimlik dogrulama penceresi acilmasin (arka planda askiya alinmasin)
$env:GIT_TERMINAL_PROMPT = '0'
$env:GIT_ASKPASS         = 'echo'

function Kaydet([string]$Mesaj) {
    $t = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    Add-Content -Path $Log -Value "$t  $Mesaj" -Encoding UTF8
}

function GitCalistir([string[]]$Argumanlar) {
    $cikti = & git -C $Repo @Argumanlar 2>&1
    return [pscustomobject]@{
        Kod  = $LASTEXITCODE
        Metin = ($cikti | Out-String).Trim()
    }
}

function RemoteHazirMi {
    $u = GitCalistir @('remote', 'get-url', 'origin')
    if ($u.Kod -ne 0) { return $false }
    # Henuz doldurulmamis sablon adreslerde push yapma
    if ($u.Metin -match 'KULLANICI|ornek|<.*>') { return $false }
    return $true
}

function DegisiklikVarMi {
    $s = GitCalistir @('status', '--porcelain')
    return -not [string]::IsNullOrWhiteSpace($s.Metin)
}

function OtomatikGuncelle {
    if (-not (DegisiklikVarMi)) { return $false }

    $ekle = GitCalistir @('add', '-A', '--', '.')
    if ($ekle.Kod -ne 0) { Kaydet "HATA add: $($ekle.Metin)"; return $false }

    $mesaj = $ElleMesaj
    if ([string]::IsNullOrWhiteSpace($mesaj)) {
        $sayi = (GitCalistir @('rev-list', '--count', 'HEAD')).Metin
        try { $sayi = [int]$sayi } catch { $sayi = 0 }
        $mesaj = "otomatik guncelleme #$($sayi + 1) - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    }

    $c = GitCalistir @('commit', '-q', '-m', $mesaj)
    if ($c.Kod -ne 0) {
        Kaydet "HATA commit: $($c.Metin)"
        return $false
    }
    Kaydet "COMMIT: $mesaj"

    if (-not (RemoteHazirMi)) {
        Kaydet "PUSH atlandi: remote 'origin' tanimli degil veya sablon adres henuz doldurulmadi."
        return $true
    }

    for ($i = 1; $i -le $PushDeneme; $i++) {
        $p = GitCalistir @('push', '-q', 'origin', 'main')
        if ($p.Kod -eq 0) { Kaydet "PUSH tamam (deneme $i)."; return $true }
        Kaydet "PUSH basarisiz (deneme $i/$PushDeneme): $($p.Metin)"
        if ($i -lt $PushDeneme) { Start-Sleep -Seconds 3 }
    }
    Kaydet "PUSH henuz basarili degil; sonraki turda yeniden denenecek."
    return $true
}

Kaydet "BASLADI (aralik=${AralikSaniye}s, repo=$Repo)"

do {
    try { OtomatikGuncelle | Out-Null } catch { Kaydet "HATA: $($_.Exception.Message)" }
    if ($TekGecis) { break }
    Start-Sleep -Seconds $AralikSaniye
} while ($true)
