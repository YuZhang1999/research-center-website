@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   MCP GitHub Pages 部署助手
echo ========================================
echo.
echo 这个脚本将指导您使用MCP工具部署网站。
echo.
echo 请按以下步骤操作：
echo.
echo 1. 确保已安装并配置MCP GitHub工具
echo 2. 编辑 direct-mcp-deploy.js 中的配置
echo     - 将 YOUR_GITHUB_USERNAME 替换为您的用户名
echo.
echo 3. 在MCP环境中执行生成的代码：
echo     node direct-mcp-deploy.js
echo.
echo 4. 按照输出提示完成部署
echo.
echo 5. 访问GitHub仓库设置，启用GitHub Pages：
echo     https://github.com/YOUR_USERNAME/research-center-website/settings/pages
echo.
echo 6. 选择分支：gh-pages
echo 7. 点击 Save
echo.
echo 网站地址：
echo   https://YOUR_USERNAME.github.io/research-center-website/
echo.
pause
