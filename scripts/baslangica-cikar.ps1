<#
    baslangica-cikar.ps1
    Otomatik guncelleme betiginin acilis kisayolunu kaldirir.
#>

$Baslangic = [Environment]::GetFolderPath('Startup')
$Kaldirilan = @(
    (Join-Path $Baslangic 'mumin-otomatik-guncelleme.lnk'),
    (Join-Path $Baslangic 'mumin-otomatik-guncelleme.cmd')
)

$bulundu = $false
foreach ($d in $Kaldirilan) {
    if (Test-Path $d) { Remove-Item $d -Force; Write-Host "Kaldirildi: $d"; $bulundu = $true }
}
if (-not $bulundu) { Write-Host "Kisayol zaten yok." }
