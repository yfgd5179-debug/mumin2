<#
    baslangica-ekle.ps1
    Otomatik guncelleme betigini Windows acilisinda (giris yapildiginda)
    otomatik baslamasi icin "Baslangic" klasorune bir kisayol olusturur.
    Administrator yetkisi gerekmez. Yol Unicode (.lnk) olarak saklandigi icin
    Turkce / Arapca karakterli klasorlerde de calisir.
#>

$Betik     = Join-Path $PSScriptRoot 'otomatik-guncelleme.ps1'
$Repo      = Split-Path -Parent $PSScriptRoot
$Baslangic = [Environment]::GetFolderPath('Startup')
$Hedef     = Join-Path $Baslangic 'mumin-otomatik-guncelleme.lnk'

# Eski (.cmd) kisayolunu temizle
$Eski = Join-Path $Baslangic 'mumin-otomatik-guncelleme.cmd'
if (Test-Path $Eski) { Remove-Item $Eski -Force }

$Kisayol  = (New-Object -ComObject WScript.Shell).CreateShortcut($Hedef)
$Kisayol.TargetPath       = "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"
$Kisayol.Arguments        = "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$Betik`""
$Kisayol.WorkingDirectory = $Repo
$Kisayol.WindowStyle      = 7   # gizli
$Kisayol.Description      = 'Otomatik git guncelleme (commit + push)'
$Kisayol.Save()

if (Test-Path $Hedef) {
    Write-Host "Kisayol olusturuldu: $Hedef"
    Write-Host "Simdiden baslatmak icin: scripts\otomatik-guncelleme-baslat.cmd"
} else {
    Write-Host "HATA: Kisayol olusturulamadi."
}
