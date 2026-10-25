# Izleyiciyi ayri bir gizli PowerShell süreci olarak baslatir (kapanan konsoldan bagimsiz).
$betik = Join-Path $PSScriptRoot 'otomatik-guncelleme.ps1'
$calisiyor = Get-CimInstance Win32_Process -Filter "Name='powershell.exe'" |
    Where-Object { $_.CommandLine -like '*otomatik-guncelleme.ps1*' }

if ($calisiyor) {
    Write-Output ("Zaten calisiyor (PID " + ($calisiyor.ProcessId -join ', ') + ")")
} else {
    Start-Process -FilePath "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe" `
        -ArgumentList @('-NoProfile', '-ExecutionPolicy', 'Bypass', '-WindowStyle', 'Hidden', '-File', $betik) `
        -WindowStyle Hidden
    Start-Sleep -Seconds 2
    $yeni = Get-CimInstance Win32_Process -Filter "Name='powershell.exe'" |
        Where-Object { $_.CommandLine -like '*otomatik-guncelleme.ps1*' }
    if ($yeni) { Write-Output ("Baslatildi (PID " + ($yeni.ProcessId -join ', ') + ")") }
    else { Write-Output "HATA: Surec baslatilamadi." }
}
