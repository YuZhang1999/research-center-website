#!/usr/bin/env node

/**
 * 使用MCP GitHub工具部署课题组网站到GitHub Pages
 * 这个脚本使用MCP GitHub工具直接与GitHub API交互
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置信息
const CONFIG = {
  repoName: 'research-center-website',
  repoDescription: '云南省工业废水光催化处理工程技术研究中心网站',
  branch: 'main',
  pagesBranch: 'gh-pages',
  buildDir: path.join(__dirname, 'frontend/build'),
  tempDir: path.join(__dirname, '.temp-deploy'),
};

// 检查构建文件是否存在
function checkBuildFiles() {
  console.log('🔍 检查构建文件...');
  
  const requiredFiles = [
    'index.html',
    'asset-manifest.json',
    'static/css/main.7af462be.css',
    'static/js/main.1cf69058.js'
  ];
  
  for (const file of requiredFiles) {
    const filePath = path.join(CONFIG.buildDir, file);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ 找不到构建文件: ${file}`);
      console.error('请先运行 "npm run build" 构建前端项目');
      process.exit(1);
    }
  }
  
  console.log('✅ 构建文件检查完成');
}

// 创建临时目录并准备部署文件
function prepareDeploymentFiles() {
  console.log('📁 准备部署文件...');
  
  // 清理临时目录
  if (fs.existsSync(CONFIG.tempDir)) {
    fs.rmSync(CONFIG.tempDir, { recursive: true, force: true });
  }
  
  // 创建临时目录
  fs.mkdirSync(CONFIG.tempDir, { recursive: true });
  
  // 复制构建文件到临时目录
  copyDir(CONFIG.buildDir, CONFIG.tempDir);
  
  // 创建CNAME文件（如果需要自定义域名）
  const cnamePath = path.join(CONFIG.tempDir, 'CNAME');
  if (!fs.existsSync(cnamePath)) {
    fs.writeFileSync(cnamePath, 'wastewater-research.ynu.edu.cn\n');
  }
  
  // 创建.nojekyll文件（禁用Jekyll处理）
  const nojekyllPath = path.join(CONFIG.tempDir, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  
  console.log('✅ 部署文件准备完成');
}

// 递归复制目录
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 生成MCP工具调用代码
function generateMCPCode() {
  console.log('📝 生成MCP部署代码...');
  
  const mcpCode = `
// MCP GitHub部署脚本
// 这个脚本需要使用MCP GitHub工具执行

const fs = require('fs');
const path = require('path');

// 读取部署文件
const deployDir = '${CONFIG.tempDir.replace(/\\/g, '\\\\')}';
const files = [];

function readFiles(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);
    
    if (entry.isDirectory()) {
      readFiles(fullPath, relativePath);
    } else {
      const content = fs.readFileSync(fullPath, 'utf8');
      files.push({
        path: relativePath.replace(/\\\\/g, '/'),
        content: content
      });
    }
  }
}

readFiles(deployDir);

console.log('准备部署', files.length, '个文件到GitHub Pages');

// MCP工具调用示例
// 实际使用时需要调用MCP GitHub工具的push_files方法
/*
const mcpArgs = {
  owner: 'YOUR_GITHUB_USERNAME',
  repo: '${CONFIG.repoName}',
  branch: '${CONFIG.pagesBranch}',
  files: files,
  message: '部署课题组网站到GitHub Pages - ' + new Date().toISOString()
};

// 调用MCP工具
// await use_mcp_tool('github.com/modelcontextprotocol/servers/tree/main/src/github', 'push_files', mcpArgs);
*/
`;

  const mcpScriptPath = path.join(__dirname, 'mcp-deploy-script.js');
  fs.writeFileSync(mcpScriptPath, mcpCode);
  
  console.log('✅ MCP代码生成完成');
  console.log('📄 生成的脚本: mcp-deploy-script.js');
}

// 生成GitHub Actions工作流文件
function generateGitHubActionsWorkflow() {
  console.log('⚙️  生成GitHub Actions工作流...');
  
  const workflowsDir = path.join(__dirname, '.github/workflows');
  fs.mkdirSync(workflowsDir, { recursive: true });
  
  const workflowContent = `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: 'frontend/package-lock.json'
      
      - name: Install dependencies
        run: |
          cd frontend
          npm ci
      
      - name: Build
        run: |
          cd frontend
          npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './frontend/build'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

  const workflowPath = path.join(workflowsDir, 'deploy-pages.yml');
  fs.writeFileSync(workflowPath, workflowContent);
  
  console.log('✅ GitHub Actions工作流生成完成');
}

// 生成部署说明文档
function generateDeploymentInstructions() {
  console.log('📋 生成部署说明...');
  
  const instructions = `# GitHub Pages 部署说明

## 方法一：使用MCP工具直接部署

### 前提条件
1. 已安装并配置MCP GitHub工具
2. 拥有GitHub账号和访问令牌

### 部署步骤
1. 运行准备脚本：
   \`\`\`bash
   node deploy-to-github-mcp.js
   \`\`\`

2. 编辑生成的 \`mcp-deploy-script.js\` 文件：
   - 设置您的GitHub用户名
   - 配置仓库信息

3. 使用MCP工具执行部署：
   \`\`\`
   // 在MCP环境中执行
   await use_mcp_tool(
     'github.com/modelcontextprotocol/servers/tree/main/src/github',
     'push_files',
     {
       owner: 'YOUR_GITHUB_USERNAME',
       repo: '${CONFIG.repoName}',
       branch: '${CONFIG.pagesBranch}',
       files: [...], // 从脚本获取
       message: '部署课题组网站'
     }
   );
   \`\`\`

## 方法二：使用GitHub Actions自动部署

### 部署步骤
1. 在GitHub上创建新仓库：\`${CONFIG.repoName}\`
2. 将代码推送到仓库：
   \`\`\`bash
   git init
   git add .
   git commit -m "初始提交"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/${CONFIG.repoName}.git
   git push -u origin main
   \`\`\`

3. 启用GitHub Pages：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

4. 网站地址：
   \`https://YOUR_USERNAME.github.io/${CONFIG.repoName}/\`

## 方法三：手动部署

### 部署步骤
1. 创建GitHub仓库
2. 创建gh-pages分支：
   \`\`\`bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r frontend/build/* .
   git add .
   git commit -m "部署到GitHub Pages"
   git push origin gh-pages
   \`\`\`

3. 在仓库设置中启用GitHub Pages，选择gh-pages分支

## 网站配置

### 自定义域名
1. 在仓库根目录创建 \`CNAME\` 文件，内容为：
   \`\`\`
   wastewater-research.ynu.edu.cn
   \`\`\`

2. 在域名服务商处添加CNAME记录：
   \`\`\`
   wastewater-research.ynu.edu.cn CNAME YOUR_USERNAME.github.io
   \`\`\`

### 禁用Jekyll
GitHub Pages默认使用Jekyll处理静态文件，React应用需要禁用：
- 在仓库根目录创建 \`.nojekyll\` 空文件

## 更新网站
1. 修改前端代码
2. 重新构建：\`cd frontend && npm run build\`
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
部署时间：${new Date().toLocaleString('zh-CN')}
`;

  const instructionsPath = path.join(__dirname, 'GITHUB_DEPLOYMENT_GUIDE.md');
  fs.writeFileSync(instructionsPath, instructions);
  
  console.log('✅ 部署说明生成完成');
  console.log('📄 说明文档: GITHUB_DEPLOYMENT_GUIDE.md');
}

// 主函数
async function main() {
  console.log('🚀 开始准备GitHub Pages部署...\n');
  
  try {
    // 检查构建文件
    checkBuildFiles();
    
    // 准备部署文件
    prepareDeploymentFiles();
    
    // 生成MCP部署代码
    generateMCPCode();
    
    // 生成GitHub Actions工作流
    generateGitHubActionsWorkflow();
    
    // 生成部署说明
    generateDeploymentInstructions();
    
    console.log('\n🎉 部署准备完成！');
    console.log('\n接下来请选择部署方式：');
    console.log('1. 使用MCP工具直接部署（编辑 mcp-deploy-script.js）');
    console.log('2. 使用GitHub Actions自动部署（推送代码到GitHub）');
    console.log('3. 手动部署（按照 GITHUB_DEPLOYMENT_GUIDE.md 说明操作）');
    console.log('\n📖 详细说明请查看 GITHUB_DEPLOYMENT_GUIDE.md');
    
  } catch (error) {
    console.error('❌ 部署准备失败:', error.message);
    process.exit(1);
  }
}

// 执行主函数
if (require.main === module) {
  main();
}

module.exports = {
  checkBuildFiles,
  prepareDeploymentFiles,
  generateMCPCode,
  generateGitHubActionsWorkflow,
  generateDeploymentInstructions
};
