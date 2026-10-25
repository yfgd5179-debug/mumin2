@echo off
rem Calisan otomatik guncelleme betigini durdurur.
powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-CimInstance Win32_Process -Filter \"Name='powershell.exe'\" | Where-Object { $_.CommandLine -like '*otomatik-guncelleme.ps1*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }"
echo Otomatik guncelleme durduruldu.
timeout /t 3 >nul
