@echo off
rem Otomatik guncelleme betigini gizli pencerede baslatir.
powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%~dp0otomatik-guncelleme.ps1" %*
