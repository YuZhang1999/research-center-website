@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ========================================
echo   课题组网站快速分享工具（内网穿透方案）
echo ========================================
echo.
echo 本工具将帮助您快速生成公网链接，让导师直接访问网站
echo 无需U盘传输，无需复杂部署
echo.

:check_python
echo 正在检测Python环境...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Python已检测到
    set python_cmd=python
    goto check_ngrok
)

python3 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Python3已检测到
    set python_cmd=python3
    goto check_ngrok
)

echo [!] 未检测到Python环境
echo.
echo 正在尝试自动安装Python...
echo 请稍等...
echo.

REM 尝试使用现有脚本安装Python
if exist "启动网站\启动网站.bat" (
    echo 使用现有脚本安装Python...
    call "启动网站\启动网站.bat"
    goto check_python
) else (
    echo [错误] 无法自动安装Python
    echo.
    echo 请手动安装Python：
    echo 1. 访问 https://www.python.org/downloads/
    echo 2. 下载并安装Python 3.11+
    echo 3. 安装时务必勾选"Add Python to PATH"
    echo 4. 重新运行此脚本
    echo.
    pause
    exit /b 1
)

:check_ngrok
echo.
echo 正在检测Ngrok...
if exist "ngrok.exe" (
    echo [✓] Ngrok已存在
    goto check_auth
)

echo [!] Ngrok未找到，正在下载...
echo 请稍等，这可能需要几分钟...
echo.

REM 下载ngrok
set ngrok_url=https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip
set temp_zip=%temp%\ngrok.zip

echo 正在下载Ngrok...
powershell -Command "Invoke-WebRequest -Uri '%ngrok_url%' -OutFile '%temp_zip%' -UseBasicParsing"

if not exist "%temp_zip%" (
    echo [错误] 下载失败，请检查网络连接
    echo.
    echo 请手动下载Ngrok：
    echo 1. 访问 https://ngrok.com/download
    echo 2. 下载Windows版本
    echo 3. 解压ngrok.exe到当前目录
    echo 4. 重新运行此脚本
    echo.
    pause
    exit /b 1
)

echo 正在解压Ngrok...
powershell -Command "Expand-Archive -Path '%temp_zip%' -DestinationPath '.' -Force"

if not exist "ngrok.exe" (
    echo [错误] 解压失败
    echo 请手动解压ngrok.zip并将ngrok.exe放在当前目录
    pause
    exit /b 1
)

echo [✓] Ngrok下载完成
del "%temp_zip%" >nul 2>&1

:check_auth
echo.
echo 正在检查Ngrok认证...
ngrok config check >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Ngrok已认证
    goto start_server
)

echo [!] Ngrok未认证
echo.
echo 请按以下步骤操作：
echo 1. 访问 https://dashboard.ngrok.com/signup 注册账号
echo 2. 登录后访问 https://dashboard.ngrok.com/get-started/your-authtoken
echo 3. 复制您的authtoken
echo.
set /p authtoken="请输入您的authtoken: "

if "!authtoken!"=="" (
    echo [错误] 未输入authtoken
    pause
    exit /b 1
)

echo 正在配置authtoken...
ngrok config add-authtoken !authtoken! >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 认证失败，请检查authtoken是否正确
    pause
    exit /b 1
)

echo [✓] Ngrok认证成功

:start_server
echo.
echo ========================================
echo   步骤1：启动本地网站服务器
echo ========================================
echo.
echo 正在启动本地网站服务器（端口8080）...
echo 请勿关闭此窗口...
echo.

REM 检查frontend/build目录是否存在
if not exist "frontend\build\index.html" (
    echo [!] 未找到构建文件，正在构建网站...
    if exist "frontend\package.json" (
        cd frontend
        call npm run build
        cd ..
    ) else (
        echo [错误] 无法构建网站，请确保frontend目录存在
        pause
        exit /b 1
    )
)

REM 启动Python HTTP服务器并等待确认
echo 启动本地HTTP服务器...
start "本地网站服务器" cmd /k "cd frontend\build && echo 服务器已启动在 http://localhost:8080 && %python_cmd% -m http.server 8080"

echo 等待服务器启动（10秒）...
timeout /t 10 /nobreak >nul

REM 检查端口8080是否在监听
echo 检查服务器状态...
netstat -ano | findstr :8080 >nul
if %errorlevel% neq 0 (
    echo [错误] 服务器未在端口8080启动
    echo 尝试使用端口8081...
    
    REM 尝试端口8081
    start "本地网站服务器" cmd /k "cd frontend\build && echo 服务器已启动在 http://localhost:8081 && %python_cmd% -m http.server 8081"
    timeout /t 5 /nobreak >nul
    
    netstat -ano | findstr :8081 >nul
    if %errorlevel% neq 0 (
        echo [严重错误] 无法启动本地服务器
        echo 请手动检查：
        echo 1. Python是否正确安装
        echo 2. frontend\build目录是否存在
        echo 3. 端口8080/8081是否被占用
        echo.
        pause
        exit /b 1
    )
    set server_port=8081
) else (
    set server_port=8080
)

echo [✓] 本地服务器已启动在端口 !server_port!

echo.
echo ========================================
echo   步骤2：启动内网穿透
echo ========================================
echo.
echo 正在启动Ngrok内网穿透...
echo 这将生成一个公网链接，导师可通过此链接访问
echo.
echo 重要提示：
echo 1. 保持此窗口打开，链接才有效
echo 2. 免费链接有效期为8小时
echo 3. 您的电脑需要保持开机和联网
echo.

echo 按任意键开始生成公网链接...
pause >nul

echo.
echo 正在生成公网链接，请稍等...
echo 成功后会出现类似以下信息：
echo    Forwarding https://abc123.ngrok.io -> http://localhost:!server_port!
echo.
echo 请将 https://abc123.ngrok.io 发送给导师
echo.
echo ========================================
echo   重要提醒
echo ========================================
echo 1. 保持此窗口打开，不要关闭
echo 2. 链接大约1-2分钟后生效
echo 3. 首次访问可能需要等待证书加载
echo 4. 免费版限制：1个并发连接，8小时有效期
echo.

echo 按任意键启动Ngrok...
pause >nul

REM 检查是否有现有隧道在运行
echo 检查现有隧道...
ngrok tunnels list >nul 2>&1
if %errorlevel% equ 0 (
    echo [!] 检测到现有隧道正在运行
    echo 正在停止现有隧道...
    ngrok tunnels kill-all
    timeout /t 2 /nobreak >nul
)

REM 启动ngrok，启用pooling以避免冲突，使用正确的端口
echo 启动新的隧道（端口!server_port!）...
ngrok http !server_port! --pooling-enabled

echo.
echo ========================================
echo   服务器已停止
echo ========================================
echo.
echo 提示：如果导师无法访问，请检查：
echo 1. 防火墙是否允许Python和Ngrok
echo 2. 网络连接是否正常
echo 3. 本地服务器是否仍在运行
echo.
pause
