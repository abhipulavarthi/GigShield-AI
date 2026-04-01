@echo off
cd /d "%~dp0"

echo Loading environment settings...
if exist .env (
    for /f "usebackq tokens=1,2 delims==" %%A in (.env) do set %%A=%%B
)

echo Starting GigShield AI Backend...
start cmd /k "cd gigshield-ai-backend && mvn spring-boot:run"

echo Starting GigShield AI Frontend...
start cmd /k "cd gigshield-ai-frontend && npm run dev -- --open"

echo Development servers launched!
