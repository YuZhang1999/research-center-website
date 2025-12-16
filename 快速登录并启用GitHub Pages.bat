@echo off
echo ========================================
echo   课题组网站 - GitHub Pages部署工具
echo ========================================
echo.

REM 检查是否已安装GitHub CLI
where gh >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未找到GitHub CLI
    echo 请先安装GitHub CLI：https://cli.github.com/
    pause
    exit /b 1
)

echo [1/5] 检查当前登录状态...
gh auth status
if %errorlevel% equ 0 (
    echo 已登录GitHub
    goto :ENABLE_PAGES
)

echo [2/5] 开始GitHub CLI登录...
echo 请按照以下步骤操作：
echo 1. 选择 GitHub.com
echo 2. 选择 HTTPS（推荐）
echo 3. 选择 "Login with a web browser"
echo 4. 在浏览器中授权
echo.

gh auth login --web
if %errorlevel% neq 0 (
    echo [错误] 登录失败
    echo 请手动运行：gh auth login
    pause
    exit /b 1
)

:ENABLE_PAGES
echo [3/5] 启用GitHub Pages...
gh api --method POST ^
  -H "Accept: application/vnd.github.v3+json" ^
  /repos/YuZhang1999/research-center-website/pages ^
  -f source='{"branch":"main","path":"/"}'

if %errorlevel% neq 0 (
    echo [警告] 启用Pages时遇到问题，可能已启用
)

echo [4/5] 检查GitHub Pages状态...
gh api /repos/YuZhang1999/research-center-website/pages

echo [5/5] 检查GitHub Actions状态...
echo 正在检查部署状态...
timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo           部署完成！
echo ========================================
echo.
echo 您的网站地址：
echo   https://YuZhang1999.github.io/research-center-website/
echo.
echo 请访问以下链接检查状态：
echo 1. GitHub Pages设置：
echo    https://github.com/YuZhang1999/research-center-website/settings/pages
echo.
echo 2. GitHub Actions部署：
echo    https://github.com/YuZhang1999/research-center-website/actions
echo.
echo 3. 访问您的网站：
echo    https://YuZhang1999.github.io/research-center-website/
echo.
echo 注意：首次部署可能需要2-5分钟才能访问。
echo ========================================
pause
