@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ========================================
echo   课题组网站启动工具（自动安装Python版）
echo ========================================
echo.

:check_python
echo 正在检测Python环境...
echo.

REM 检测Python
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Python已安装
    set python_cmd=python
    goto start_server
)

python3 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Python3已安装
    set python_cmd=python3
    goto start_server
)

echo [!] 未检测到Python环境
echo.
echo 正在自动安装Python...
echo.

REM 创建临时目录
set temp_dir=%temp%\课题组网站_python_install
if not exist "%temp_dir%" mkdir "%temp_dir%"

REM 下载Python安装程序
echo 正在下载Python安装程序...
echo.

REM 使用curl下载Python 3.11.8（稳定版本）
set python_url=https://www.python.org/ftp/python/3.11.8/python-3.11.8-amd64.exe
set installer_path=%temp_dir%\python-installer.exe

REM 尝试使用不同的方法下载
echo 方法1: 使用curl下载...
curl -L -o "%installer_path%" "%python_url%" --silent --show-error
if %errorlevel% neq 0 (
    echo 方法1失败，尝试方法2: 使用bitsadmin下载...
    bitsadmin /transfer pythonDownload /download /priority high "%python_url%" "%installer_path%"
)

if not exist "%installer_path%" (
    echo 方法2失败，尝试方法3: 使用powershell下载...
    powershell -Command "Invoke-WebRequest -Uri '%python_url%' -OutFile '%installer_path%' -UseBasicParsing"
)

if not exist "%installer_path%" (
    echo.
    echo [错误] 无法下载Python安装程序
    echo.
    echo 请手动安装Python：
    echo 1. 访问 https://www.python.org/downloads/
    echo 2. 下载并安装Python
    echo 3. 安装时务必勾选"Add Python to PATH"
    echo 4. 重新运行此脚本
    echo.
    pause
    exit /b 1
)

echo [✓] Python安装程序下载完成
echo.

REM 安装Python（静默安装，添加PATH）
echo 正在安装Python（这可能需要几分钟）...
echo 请勿关闭此窗口...
echo.

"%installer_path%" /quiet InstallAllUsers=1 PrependPath=1 Include_test=0

REM 检查安装是否成功
timeout /t 5 /nobreak >nul

REM 更新环境变量（使新安装的Python立即生效）
echo 更新环境变量...
setx PATH "%PATH%;C:\Program Files\Python311;C:\Program Files\Python311\Scripts" >nul 2>&1
set PATH=%PATH%;C:\Program Files\Python311;C:\Program Files\Python311\Scripts

REM 再次检测Python
echo.
echo 验证Python安装...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Python安装成功！
    set python_cmd=python
    goto cleanup_temp
)

python3 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Python3安装成功！
    set python_cmd=python3
    goto cleanup_temp
)

echo.
echo [!] Python安装可能未完成，正在尝试其他方法...
echo.

REM 尝试使用注册表查找Python安装路径
for /f "tokens=2*" %%a in ('reg query "HKLM\SOFTWARE\Python\PythonCore\3.11\InstallPath" /ve 2^>nul') do (
    set python_path=%%b
)

if defined python_path (
    echo 找到Python安装路径: !python_path!
    set PATH=!python_path!;!python_path!Scripts;%PATH%
    set python_cmd=!python_path!python.exe
    goto cleanup_temp
)

echo.
echo [警告] 无法自动配置Python环境
echo 请尝试以下操作：
echo 1. 重新启动电脑
echo 2. 重新运行此脚本
echo 或手动安装Python后再次尝试
echo.
pause
exit /b 1

:cleanup_temp
REM 清理临时文件
if exist "%temp_dir%" (
    echo 清理临时文件...
    rmdir /s /q "%temp_dir%" >nul 2>&1
)

echo.
echo [✓] Python环境准备就绪
echo.

:start_server
echo 正在启动网站服务器...
echo.
echo 网站将在浏览器中自动打开...
echo 如果未自动打开，请手动访问：
echo     http://localhost:8080
echo.
echo 按 Ctrl+C 停止服务器
echo.

REM 切换到frontend/build目录
cd /d "%~dp0..\frontend\build"

REM 启动服务器并打开浏览器
start "" "http://localhost:8080"

REM 检查端口是否被占用
netstat -ano | findstr :8080 >nul
if %errorlevel% equ 0 (
    echo [!] 端口8080已被占用，尝试使用端口8081...
    start "" "http://localhost:8081"
    if "%python_cmd%"=="python3" (
        python3 -m http.server 8081
    ) else (
        python -m http.server 8081
    )
) else (
    if "%python_cmd%"=="python3" (
        python3 -m http.server 8080
    ) else (
        python -m http.server 8080
    )
)

echo.
echo 服务器已停止
pause
