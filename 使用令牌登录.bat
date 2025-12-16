@echo off
echo ========================================
echo   GitHub CLI令牌登录工具
echo ========================================
echo.
echo 使用说明：
echo 1. 访问 https://github.com/settings/tokens
echo 2. 生成新令牌（classic）
echo 3. 选择权限：repo, workflow
echo 4. 复制令牌
echo.
echo 注意：令牌只显示一次，请妥善保存！
echo.

set /p TOKEN=请输入您的GitHub个人访问令牌：

if "%TOKEN%"=="" (
    echo [错误] 未输入令牌
    pause
    exit /b 1
)

echo %TOKEN% | gh auth login --with-token

if %errorlevel% neq 0 (
    echo [错误] 令牌登录失败
    echo 可能原因：
    echo 1. 令牌无效或已过期
    echo 2. 令牌权限不足
    echo 3. 网络问题
    pause
    exit /b 1
)

echo [成功] 已登录GitHub！
echo.
echo 正在启用GitHub Pages...
gh api --method POST ^
  -H "Accept: application/vnd.github.v3+json" ^
  /repos/YuZhang1999/research-center-website/pages ^
  -f source='{"branch":"main","path":"/"}'

echo.
echo 检查GitHub Pages状态：
gh api /repos/YuZhang1999/research-center-website/pages

echo.
echo ========================================
echo   下一步操作：
echo 1. 检查部署：https://github.com/YuZhang1999/research-center-website/actions
echo 2. 访问网站：https://YuZhang1999.github.io/research-center-website/
echo 3. 等待2-5分钟生效
echo ========================================
pause
