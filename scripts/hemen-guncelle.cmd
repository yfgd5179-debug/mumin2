@echo off
rem Degisiklik varsa hemen bir kez commit + push yapar ve cikar.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0otomatik-guncelleme.ps1" -TekGecis
pause
