@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   课题组网站测试工具
echo ========================================
echo.

echo 正在启动网站服务器...
echo.

REM 启动Python服务器
start /B python -m http.server 8080

echo 等待服务器启动...
timeout /t 2 /nobreak >nul

echo.
echo 测试网站访问...
echo.

REM 使用curl测试网站
curl -s -o test_output.html -w "HTTP状态码: %%{http_code}\n" http://localhost:8080/frontend/build/

if exist test_output.html (
    echo [✓] 网站服务器启动成功！
    echo.
    echo 您可以通过以下方式访问网站：
    echo 1. 打开浏览器访问：http://localhost:8080/frontend/build/
    echo 2. 或直接访问：http://localhost:8080/
    echo.
    echo 按任意键打开浏览器...
    pause >nul
    start "" "http://localhost:8080/frontend/build/"
) else (
    echo [!] 网站服务器启动失败
    echo 请检查Python是否已安装
)

echo.
echo 按任意键停止服务器并退出...
pause >nul

REM 停止Python服务器
taskkill /F /IM python.exe 2>nul
del test_output.html 2>nul

echo 测试完成！
pause
