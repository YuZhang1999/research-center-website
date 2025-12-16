#!/usr/bin/env node

/**
 * 直接使用MCP GitHub工具部署课题组网站
 * 这个脚本演示如何使用MCP GitHub工具创建仓库并部署到GitHub Pages
 */

const fs = require('fs');
const path = require('path');

// 配置信息
const CONFIG = {
  repoName: 'research-center-website',
  repoDescription: '云南省工业废水光催化处理工程技术研究中心网站',
  owner: 'YOUR_GITHUB_USERNAME', // 需要替换为实际的GitHub用户名
  branch: 'gh-pages',
  buildDir: path.join(__dirname, 'frontend/build'),
  tempDir: path.join(__dirname, '.temp-deploy'),
};

// 显示部署信息
console.log('🚀 GitHub Pages 直接部署工具');
console.log('==============================\n');
console.log('这个脚本演示如何使用MCP GitHub工具部署网站。');
console.log('由于MCP工具需要在特定环境中运行，以下代码需要');
console.log('在支持MCP的环境中执行。\n');

// 生成MCP工具调用代码
function generateMCPDeploymentCode() {
  console.log('📋 生成的MCP部署代码：\n');
  
  // 读取所有部署文件
  const files = [];
  
  function readFiles(dir, basePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(basePath, entry.name);
      
      if (entry.isDirectory()) {
        readFiles(fullPath, relativePath);
      } else {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          files.push({
            path: relativePath.replace(/\\/g, '/'),
            content: content
          });
        } catch (error) {
          console.warn(`⚠️  无法读取文件: ${relativePath}`, error.message);
        }
      }
    }
  }
  
  if (fs.existsSync(CONFIG.tempDir)) {
    readFiles(CONFIG.tempDir);
  } else {
    console.log('⚠️  临时部署目录不存在，请先运行 deploy-to-github-mcp.js');
    return;
  }
  
  console.log(`📊 找到 ${files.length} 个文件需要部署\n`);
  
  // 生成MCP工具调用代码
  const mcpCode = `
// ============================================
// MCP GitHub工具部署代码
// 在支持MCP的环境中执行以下代码
// ============================================

// 1. 首先检查仓库是否存在，如果不存在则创建
async function createRepositoryIfNeeded() {
  try {
    // 搜索仓库
    const searchResult = await use_mcp_tool(
      'github.com/modelcontextprotocol/servers/tree/main/src/github',
      'search_repositories',
      {
        query: '${CONFIG.repoName} user:${CONFIG.owner}',
        page: 1,
        perPage: 1
      }
    );
    
    if (searchResult.total_count === 0) {
      console.log('📦 创建新仓库...');
      
      // 创建新仓库
      const createResult = await use_mcp_tool(
        'github.com/modelcontextprotocol/servers/tree/main/src/github',
        'create_repository',
        {
          name: '${CONFIG.repoName}',
          description: '${CONFIG.repoDescription}',
          private: false,
          autoInit: true
        }
      );
      
      console.log('✅ 仓库创建成功:', createResult.html_url);
      return createResult;
    } else {
      console.log('✅ 仓库已存在:', searchResult.items[0].html_url);
      return searchResult.items[0];
    }
  } catch (error) {
    console.error('❌ 仓库操作失败:', error.message);
    throw error;
  }
}

// 2. 部署文件到GitHub Pages分支
async function deployToGitHubPages() {
  try {
    console.log('🚀 开始部署文件到GitHub Pages...');
    
    // 准备文件数据
    const files = ${JSON.stringify(files, null, 2)};
    
    console.log(\`📦 准备部署 \${files.length} 个文件\`);
    
    // 使用push_files工具上传所有文件
    const deployResult = await use_mcp_tool(
      'github.com/modelcontextprotocol/servers/tree/main/src/github',
      'push_files',
      {
        owner: '${CONFIG.owner}',
        repo: '${CONFIG.repoName}',
        branch: '${CONFIG.branch}',
        files: files,
        message: '部署课题组网站到GitHub Pages - ' + new Date().toISOString()
      }
    );
    
    console.log('✅ 文件部署成功！');
    console.log('📊 提交信息:', deployResult.commit.message);
    console.log('🔗 提交链接:', deployResult.commit.html_url);
    
    return deployResult;
  } catch (error) {
    console.error('❌ 文件部署失败:', error.message);
    
    // 如果分支不存在，先创建分支
    if (error.message.includes('Reference does not exist')) {
      console.log('🔄 尝试创建 ${CONFIG.branch} 分支...');
      
      // 先获取默认分支的最新提交
      const defaultBranch = await use_mcp_tool(
        'github.com/modelcontextprotocol/servers/tree/main/src/github',
        'get_file_contents',
        {
          owner: '${CONFIG.owner}',
          repo: '${CONFIG.repoName}',
          path: '',
          branch: 'main'
        }
      );
      
      // 创建gh-pages分支
      const branchResult = await use_mcp_tool(
        'github.com/modelcontextprotocol/servers/tree/main/src/github',
        'create_branch',
        {
          owner: '${CONFIG.owner}',
          repo: '${CONFIG.repoName}',
          branch: '${CONFIG.branch}',
          from_branch: 'main'
        }
      );
      
      console.log('✅ 分支创建成功，重新尝试部署...');
      return await deployToGitHubPages();
    }
    
    throw error;
  }
}

// 3. 启用GitHub Pages
async function enableGitHubPages() {
  try {
    console.log('⚙️  配置GitHub Pages...');
    
    // 注意：MCP工具目前可能没有直接启用Pages的API
    // 需要手动在GitHub网站设置
    console.log('📋 需要手动启用GitHub Pages:');
    console.log('1. 访问 https://github.com/${CONFIG.owner}/${CONFIG.repoName}/settings/pages');
    console.log('2. 在Source部分选择: ${CONFIG.branch} branch');
    console.log('3. 点击Save');
    console.log('4. 等待1-2分钟生效');
    
    return {
      pages_url: \`https://\${'${CONFIG.owner}'}.github.io/${CONFIG.repoName}/\`,
      settings_url: \`https://github.com/\${'${CONFIG.owner}'}/${CONFIG.repoName}/settings/pages\`
    };
  } catch (error) {
    console.error('⚠️  Pages配置提醒失败:', error.message);
    return null;
  }
}

// 4. 主部署函数
async function main() {
  try {
    console.log('🚀 开始GitHub Pages部署流程...\\n');
    
    // 步骤1: 创建或检查仓库
    const repo = await createRepositoryIfNeeded();
    
    // 步骤2: 部署文件
    const deployResult = await deployToGitHubPages();
    
    // 步骤3: 配置Pages
    const pagesConfig = await enableGitHubPages();
    
    console.log('\\n🎉 部署流程完成！');
    console.log('\\n📋 下一步操作：');
    console.log('1. 访问GitHub仓库:', \`https://github.com/\${'${CONFIG.owner}'}/${CONFIG.repoName}\`);
    console.log('2. 启用GitHub Pages（如果尚未启用）');
    console.log('3. 访问您的网站:', pagesConfig?.pages_url || \`https://\${'${CONFIG.owner}'}.github.io/${CONFIG.repoName}/\`);
    console.log('\\n⏱️  首次访问可能需要几分钟生效');
    
    return {
      repository: repo,
      deployment: deployResult,
      pages: pagesConfig
    };
  } catch (error) {
    console.error('❌ 部署失败:', error.message);
    console.log('\\n💡 故障排除建议：');
    console.log('1. 检查GitHub令牌权限');
    console.log('2. 确认仓库名称正确');
    console.log('3. 检查网络连接');
    throw error;
  }
}

// 执行部署
// main().catch(console.error);
`;
  
  console.log(mcpCode);
  
  // 保存到文件
  const outputPath = path.join(__dirname, 'mcp-direct-deploy-code.js');
  fs.writeFileSync(outputPath, mcpCode);
  
  console.log(`\n📄 完整代码已保存到: ${outputPath}`);
  console.log('\n🔧 使用说明：');
  console.log('1. 将代码中的 YOUR_GITHUB_USERNAME 替换为您的GitHub用户名');
  console.log('2. 在支持MCP的环境中执行上述代码');
  console.log('3. 按照提示完成GitHub Pages配置\n');
}

// 生成简化版部署脚本（用于批处理文件）
function generateSimpleDeploymentScript() {
  console.log('\n📜 简化部署脚本（用于批处理）：\n');
  
  const simpleScript = `@echo off
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
`;
  
  console.log(simpleScript);
  
  // 保存批处理文件
  const batPath = path.join(__dirname, 'mcp-deploy-helper.bat');
  fs.writeFileSync(batPath, simpleScript);
  
  console.log(`\n📄 批处理助手已保存到: ${batPath}`);
}

// 主函数
function main() {
  console.log('🔧 生成MCP直接部署代码...\n');
  
  // 检查临时目录
  if (!fs.existsSync(CONFIG.tempDir)) {
    console.log('⚠️  临时部署目录不存在');
    console.log('💡 请先运行: node deploy-to-github-mcp.js');
    console.log('   或手动创建构建文件\n');
    return;
  }
  
  // 生成MCP部署代码
  generateMCPDeploymentCode();
  
  // 生成简化脚本
  generateSimpleDeploymentScript();
  
  console.log('\n✅ 代码生成完成！');
  console.log('\n📖 详细部署说明请查看 GITHUB_DEPLOYMENT_GUIDE.md');
  console.log('\n🚀 开始部署：');
  console.log('1. 编辑配置（设置GitHub用户名）');
  console.log('2. 在MCP环境中执行生成的代码');
  console.log('3. 按照提示完成GitHub Pages配置\n');
}

// 执行
if (require.main === module) {
  main();
}

module.exports = {
  generateMCPDeploymentCode,
  generateSimpleDeploymentScript
};
