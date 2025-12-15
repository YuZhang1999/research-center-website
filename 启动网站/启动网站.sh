#!/bin/bash

# 课题组网站启动脚本 (Linux/Mac)

echo ""
echo "========================================"
echo "   课题组网站启动工具"
echo "========================================"
echo ""

# 检测Python环境
echo "正在检测Python环境..."

if command -v python3 &> /dev/null; then
    echo "[✓] Python3已安装"
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    echo "[✓] Python已安装"
    PYTHON_CMD="python"
else
    echo ""
    echo "[!] 未检测到Python环境"
    echo ""
    echo "请选择操作："
    echo "1. 安装Python（推荐）"
    echo "2. 使用Node.js方式查看"
    echo "3. 退出"
    echo ""
    read -p "请输入选项 (1/2/3): " choice
    
    case $choice in
        1)
            echo ""
            echo "正在打开Python官网下载页面..."
            if [[ "$OSTYPE" == "darwin"* ]]; then
                open "https://www.python.org/downloads/"
            else
                xdg-open "https://www.python.org/downloads/" 2>/dev/null || \
                echo "请手动访问: https://www.python.org/downloads/"
            fi
            echo "请下载并安装Python，然后重新运行此脚本"
            read -p "按回车键继续..."
            exit 1
            ;;
        2)
            echo ""
            echo "请参考《导师查看说明.md》中的Node.js查看方式"
            read -p "按回车键继续..."
            exit 1
            ;;
        3)
            exit 0
            ;;
        *)
            echo "无效选项"
            exit 1
            ;;
    esac
fi

echo ""
echo "正在启动网站服务器..."
echo ""
echo "网站将在浏览器中自动打开..."
echo "如果未自动打开，请手动访问："
echo "    http://localhost:8080/frontend/build"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

# 创建简单的HTML重定向页面
if [ ! -f "index.html" ]; then
    cat > index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>课题组网站</title>
    <meta http-equiv="refresh" content="0; url=./frontend/build/">
</head>
<body>
    <p>正在跳转到课题组网站... <a href="./frontend/build/">点击这里</a></p>
</body>
</html>
EOF
fi

# 启动服务器并打开浏览器
if [[ "$OSTYPE" == "darwin"* ]]; then
    open "http://localhost:8080/frontend/build/" &
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open "http://localhost:8080/frontend/build/" 2>/dev/null &
fi

# 启动HTTP服务器
$PYTHON_CMD -m http.server 8080

echo ""
echo "服务器已停止"
echo ""
