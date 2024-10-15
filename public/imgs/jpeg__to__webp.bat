@echo off
setlocal enabledelayedexpansion

rem Change le chemin ci-dessous vers le dossier courant
set "folder=%~dp0"

cd /d "%folder%"

rem Convertir tous les fichiers JPEG
for %%f in (*.jpg *.jpeg) do (
    ffmpeg -i "%%f" "%%~nf.webp"
)

rem Convertir tous les fichiers PNG
for %%f in (*.png) do (
    ffmpeg -i "%%f" "%%~nf.webp"
)

echo Conversion terminée.
pause
