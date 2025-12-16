# GitHub Pages 部署说明

## 方法一：使用MCP工具直接部署

### 前提条件
1. 已安装并配置MCP GitHub工具
2. 拥有GitHub账号和访问令牌

### 部署步骤
1. 运行准备脚本：
   ```bash
   node deploy-to-github-mcp.js
   ```

2. 编辑生成的 `mcp-deploy-script.js` 文件：
   - 设置您的GitHub用户名
   - 配置仓库信息

3. 使用MCP工具执行部署：
   ```
   // 在MCP环境中执行
   await use_mcp_tool(
     'github.com/modelcontextprotocol/servers/tree/main/src/github',
     'push_files',
     {
       owner: 'YOUR_GITHUB_USERNAME',
       repo: 'research-center-website',
       branch: 'gh-pages',
       files: [...], // 从脚本获取
       message: '部署课题组网站'
     }
   );
   ```

## 方法二：使用GitHub Actions自动部署

### 部署步骤
1. 在GitHub上创建新仓库：`research-center-website`
2. 将代码推送到仓库：
   ```bash
   git init
   git add .
   git commit -m "初始提交"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/research-center-website.git
   git push -u origin main
   ```

3. 启用GitHub Pages：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

4. 网站地址：
   `https://YOUR_USERNAME.github.io/research-center-website/`

## 方法三：手动部署

### 部署步骤
1. 创建GitHub仓库
2. 创建gh-pages分支：
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r frontend/build/* .
   git add .
   git commit -m "部署到GitHub Pages"
   git push origin gh-pages
   ```

3. 在仓库设置中启用GitHub Pages，选择gh-pages分支

## 网站配置

### 自定义域名
1. 在仓库根目录创建 `CNAME` 文件，内容为：
   ```
   wastewater-research.ynu.edu.cn
   ```

2. 在域名服务商处添加CNAME记录：
   ```
   wastewater-research.ynu.edu.cn CNAME YOUR_USERNAME.github.io
   ```

### 禁用Jekyll
GitHub Pages默认使用Jekyll处理静态文件，React应用需要禁用：
- 在仓库根目录创建 `.nojekyll` 空文件

## 更新网站
1. 修改前端代码
2. 重新构建：`cd frontend && npm run build`
3. 重新部署（选择上述任一方法）

## 故障排除

### 常见问题
1. **404错误**：等待几分钟让GitHub Pages生效
2. **样式丢失**：检查资源路径是否正确
3. **页面空白**：检查控制台错误，可能是路由问题

### 技术支持
- GitHub Pages文档：https://docs.github.com/pages
- React部署指南：https://create-react-app.dev/docs/deployment

---
部署时间：2025/12/15 22:25:20
