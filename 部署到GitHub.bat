@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ========================================
echo   课题组网站GitHub部署工具
echo ========================================
echo.
echo 本工具将帮助您将网站部署到GitHub Pages
echo 获得永久免费的公网访问链接
echo.

:check_git
echo 正在检测Git环境...
git --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Git已安装
    goto check_node
)

echo [!] Git未安装
echo.
echo 请按以下步骤操作：
echo 1. 访问 https://git-scm.com/download/win 下载Git
echo 2. 安装Git（全部使用默认选项）
echo 3. 安装完成后重新运行此脚本
echo.
pause
exit /b 1

:check_node
echo.
echo 正在检测Node.js环境...
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Node.js已安装
    goto check_npm
)

echo [!] Node.js未安装
echo.
echo 请按以下步骤操作：
echo 1. 访问 https://nodejs.org/ 下载LTS版本
echo 2. 安装Node.js（全部使用默认选项）
echo 3. 安装完成后重新运行此脚本
echo.
pause
exit /b 1

:check_npm
npm --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] npm已安装
    goto check_build
)

echo [!] npm未正确安装
echo 请重新安装Node.js
pause
exit /b 1

:check_build
echo.
echo ========================================
echo   步骤1：构建网站
echo ========================================
echo.
echo 正在检查构建文件...
if exist "frontend\build\index.html" (
    echo [✓] 构建文件已存在
    goto check_git_config
)

echo [!] 未找到构建文件，正在构建网站...
echo 这可能需要几分钟，请稍等...
echo.

REM 检查前端依赖
if not exist "frontend\node_modules" (
    echo 安装前端依赖...
    cd frontend
    call npm install
    cd ..
)

echo 构建网站...
cd frontend
call npm run build
cd ..

if not exist "frontend\build\index.html" (
    echo [错误] 构建失败
    echo 请检查：
    echo 1. 网络连接是否正常
    echo 2. Node.js版本是否兼容
    echo 3. 查看frontend目录下的错误信息
    echo.
    pause
    exit /b 1
)

echo [✓] 网站构建成功

:check_git_config
echo.
echo ========================================
echo   步骤2：配置Git
echo ========================================
echo.
echo 正在检查Git配置...

REM 检查用户名
git config --global user.name >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Git用户名未设置
    set /p git_name="请输入您的Git用户名（用于提交记录）: "
    git config --global user.name "!git_name!"
)

REM 检查邮箱
git config --global user.email >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Git邮箱未设置
    set /p git_email="请输入您的Git邮箱: "
    git config --global user.email "!git_email!"
)

echo [✓] Git配置完成

:check_repo
echo.
echo ========================================
echo   步骤3：准备Git仓库
echo ========================================
echo.
echo 重要：在继续之前，请确保：
echo 1. 已注册GitHub账号（https://github.com）
echo 2. 已创建新仓库，名称为：research-center-website
echo 3. 仓库设置为Public（公开）
echo.
echo 按任意键继续...
pause >nul

REM 检查是否已初始化Git仓库
if not exist ".git" (
    echo 初始化Git仓库...
    git init
    git add .
    git commit -m "初始提交：课题组网站"
)

REM 检查远程仓库
git remote -v | findstr origin >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] 远程仓库已配置
    goto deploy
)

echo [!] 未配置远程仓库
echo.
echo 请按以下步骤操作：
echo 1. 访问 https://github.com/new 创建新仓库
echo 2. 仓库名：research-center-website
echo 3. 描述：云南省工业废水光催化处理工程技术研究中心网站
echo 4. 选择Public，不初始化README
echo.
echo 创建完成后，复制仓库的HTTPS地址
echo 例如：https://github.com/您的用户名/research-center-website.git
echo.
set /p repo_url="请输入您的GitHub仓库地址: "

if "!repo_url!"=="" (
    echo [错误] 未输入仓库地址
    pause
    exit /b 1
)

echo 添加远程仓库...
git remote add origin "!repo_url!"

:deploy
echo.
echo ========================================
echo   步骤4：部署到GitHub Pages
echo ========================================
echo.
echo 正在部署网站到GitHub Pages...
echo 这将在GitHub上创建一个gh-pages分支
echo 用于托管静态网站
echo.

REM 创建并切换到gh-pages分支
echo 创建gh-pages分支...
git checkout --orphan gh-pages >nul 2>&1

REM 清理除构建文件外的其他文件
echo 清理文件...
if exist ".gitignore" del .gitignore
if exist "README.md" move README.md README.backup.md

REM 创建临时目录存放构建文件
set temp_dir=%temp%\research-center-build
if exist "!temp_dir!" rmdir /s /q "!temp_dir!"
mkdir "!temp_dir!"

echo 复制构建文件...
xcopy "frontend\build\*" "!temp_dir!\" /E /I /Y

REM 清空当前目录（除了.git）
for /f "delims=" %%i in ('dir /b /a') do (
    if not "%%i"==".git" (
        if exist "%%i" (
            if "%%i" neq "部署到GitHub.bat" (
                if "%%i" neq "快速分享.bat" (
                    if "%%i" neq "启动网站" (
                        rmdir /s /q "%%i" 2>nul || del /q "%%i" 2>nul
                    )
                )
            )
        )
    )
)

REM 复制构建文件回来
xcopy "!temp_dir!\*" "." /E /I /Y

REM 清理临时目录
rmdir /s /q "!temp_dir!"

echo 提交更改...
git add .
git commit -m "部署到GitHub Pages" >nul 2>&1

echo 推送到GitHub...
git push -f origin gh-pages

if %errorlevel% neq 0 (
    echo.
    echo [错误] 推送失败，可能原因：
    echo 1. 网络连接问题
    echo 2. 仓库地址错误
    echo 3. 权限不足
    echo.
    echo 请尝试手动执行：
    echo   git push -f origin gh-pages
    echo.
    pause
    exit /b 1
)

echo.
echo [✓] 部署成功！
echo.

:enable_pages
echo ========================================
echo   步骤5：启用GitHub Pages
echo ========================================
echo.
echo 网站已推送到GitHub，现在需要启用GitHub Pages：
echo.
echo 请按以下步骤操作：
echo 1. 访问 https://github.com/您的用户名/research-center-website
echo 2. 点击 Settings（设置）
echo 3. 在左侧菜单选择 Pages（页面）
echo 4. 在 Source 部分选择：gh-pages branch
echo 5. 点击 Save（保存）
echo.
echo 等待1-2分钟，页面会显示绿色提示
echo 然后访问：https://您的用户名.github.io/research-center-website
echo.
echo 重要提示：
echo 1. 首次部署可能需要几分钟生效
echo 2. 如果显示404，请等待几分钟后刷新
echo 3. 网站内容更新后，重新运行此脚本即可
echo.

:summary
echo ========================================
echo   部署完成总结
echo ========================================
echo.
echo ✅ 网站构建完成
echo ✅ 代码推送到GitHub
echo ✅ 创建了gh-pages分支
echo.
echo 📋 接下来需要您手动操作：
echo 1. 登录GitHub，进入仓库Settings
echo 2. 启用GitHub Pages（选择gh-pages分支）
echo 3. 等待部署完成（约1-2分钟）
echo 4. 访问您的网站
echo.
echo 🔗 您的网站地址将是：
echo    https://您的用户名.github.io/research-center-website
echo.
echo 📝 更新网站内容：
echo 1. 修改网站源代码
echo 2. 重新运行此脚本
echo 3. 等待GitHub自动更新
echo.
echo ⚠️  注意事项：
echo 1. GitHub Pages有流量限制，但足够展示使用
echo 2. 国内访问GitHub可能较慢
echo 3. 如需自定义域名，可在Pages设置中添加
echo.
echo 按任意键打开浏览器查看GitHub仓库...
pause >nul

REM 尝试打开GitHub仓库
set repo_name=research-center-website
set github_url=https://github.com

REM 尝试从git配置获取用户名
for /f "tokens=*" %%a in ('git config --global user.name') do set github_user=%%a

if defined github_user (
    start "" "!github_url!/!github_user!/!repo_name!"
) else (
    start "" "!github_url!"
)

echo.
echo 脚本执行完成！
echo 请按照上述说明完成GitHub Pages配置
echo.
pause
