# Ngrok隧道稳定性问题解决方案

## 问题分析

您遇到了隧道在不到1小时内离线的问题（ERR_NGROK_3200），虽然免费隧道理论上有8小时有效期。这通常由以下原因引起：

### 常见原因
1. **网络连接中断**：您的网络短暂断开
2. **电脑休眠/睡眠**：Windows电源设置导致网络中断
3. **防火墙/杀毒软件**：阻止了Ngrok连接
4. **Ngrok服务限制**：免费用户可能遇到连接限制
5. **本地服务器崩溃**：Python HTTP服务器意外停止
6. **IP地址变化**：动态IP导致连接中断

## 立即恢复方案

### 方案一：重新启动隧道（最简单）
```bash
# 1. 停止所有相关进程
taskkill /f /im ngrok.exe 2>nul
taskkill /f /im python.exe 2>nul

# 2. 重新运行脚本
快速分享.bat
```

### 方案二：使用备用端口
```bash
# 手动启动（避免端口冲突）
cd frontend/build
python -m http.server 8081

# 另一个窗口
ngrok http 8081
```

### 方案三：检查并修复网络
```bash
# 检查网络连接
ping 8.8.8.8

# 重置网络适配器（管理员权限）
netsh winsock reset
netsh int ip reset
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```

## 长期稳定方案

### 方案一：使用国内内网穿透工具（更稳定）

#### Sunny-Ngrok（国内版）
```bash
# 1. 访问 https://www.ngrok.cc 注册
# 2. 创建免费隧道（HTTP，端口8080）
# 3. 下载客户端，配置隧道ID
sunny.exe clientid 您的隧道ID
```

#### 花生壳（国内老牌）
1. 下载花生壳客户端
2. 实名认证（免费版需要）
3. 添加映射：内网IP:8080 → 外网域名

#### 对比
| 工具 | 稳定性 | 速度 | 免费限制 | 国内访问 |
|------|--------|------|----------|----------|
| Ngrok国际版 | 中等 | 慢 | 8小时，1并发 | 可能慢 |
| Sunny-Ngrok | 较高 | 快 | 2M带宽，1GB/月 | 快 |
| 花生壳 | 高 | 中等 | 1M带宽，1GB/月 | 快 |

### 方案二：部署到永久托管平台（推荐）

#### GitHub Pages（完全免费）
```bash
# 使用现有脚本
部署到GitHub.bat
```
**优点**：
- 永久链接，不会过期
- 完全免费
- 全球CDN加速
- 支持自定义域名

**访问地址**：`https://用户名.github.io/research-center-website`

#### Vercel（更适合React项目）
```bash
# 安装Vercel CLI
npm install -g vercel

# 部署
vercel --prod
```

### 方案三：自建稳定隧道（技术进阶）

#### 使用Cloudflare Tunnel（免费且稳定）
```bash
# 1. 安装Cloudflare CLI
npm install -g @cloudflare/cloudflared

# 2. 登录Cloudflare
cloudflared tunnel login

# 3. 创建隧道
cloudflared tunnel create 课题组网站

# 4. 配置路由
cloudflared tunnel route dns 课题组网站 您的域名

# 5. 运行隧道
cloudflared tunnel run 课题组网站
```

#### 使用frp（自建服务器）
需要有自己的云服务器，但完全可控。

## 预防措施

### 1. 防止电脑休眠
```bash
# 设置电源计划（不睡眠）
powercfg -change -standby-timeout-ac 0
powercfg -change -hibernate-timeout-ac 0
```

### 2. 保持网络稳定
- 使用有线网络代替WiFi
- 关闭节能网络适配器设置
- 设置静态IP地址

### 3. 监控隧道状态
创建监控脚本 `监控隧道.bat`：
```batch
@echo off
chcp 65001 >nul
:loop
curl -s http://localhost:4040/api/tunnels >nul
if %errorlevel% neq 0 (
    echo [%time%] 隧道离线，重新启动...
    taskkill /f /im ngrok.exe 2>nul
    start ngrok http 8080
)
timeout /t 300 /nobreak >nul
goto loop
```

### 4. 使用进程守护
创建 `守护进程.bat`：
```batch
@echo off
chcp 65001 >nul
echo 启动进程守护，每5分钟检查一次...

:check_python
tasklist | findstr python.exe >nul
if %errorlevel% neq 0 (
    echo [%time%] Python服务器停止，重新启动...
    start "Python服务器" cmd /k "cd frontend\build && python -m http.server 8080"
)

:check_ngrok
tasklist | findstr ngrok.exe >nul
if %errorlevel% neq 0 (
    echo [%time%] Ngrok隧道停止，重新启动...
    start "Ngrok隧道" cmd /k "ngrok http 8080"
)

timeout /t 300 /nobreak >nul
goto check_python
```

## 故障排除指南

### 问题1：隧道频繁断开
**可能原因**：网络不稳定，IP变化
**解决方案**：
1. 使用有线网络
2. 设置路由器固定IP
3. 使用国内工具（Sunny-Ngrok）

### 问题2：访问速度慢
**可能原因**：Ngrok国际服务器延迟
**解决方案**：
1. 切换到国内工具
2. 使用GitHub Pages（有国内CDN）
3. 部署到国内云存储（阿里云OSS）

### 问题3：需要长期稳定访问
**解决方案**：
1. **立即**：使用GitHub Pages部署
2. **中期**：购买Ngrok付费版（固定域名）
3. **长期**：租用国内云服务器

## 推荐方案优先级

### 根据需求选择：

| 需求 | 推荐方案 | 预计时间 | 成本 |
|------|----------|----------|------|
| 临时演示（1-2小时） | Ngrok重新启动 | 5分钟 | 免费 |
| 短期展示（1-2天） | Sunny-Ngrok | 15分钟 | 免费 |
| 长期展示（持续） | GitHub Pages | 30分钟 | 免费 |
| 正式上线（专业） | 云服务器+域名 | 2小时 | 100+元/月 |

### 操作流程建议：

1. **立即行动**：重新运行 `快速分享.bat` 生成新链接
2. **今天内完成**：运行 `部署到GitHub.bat` 获得永久链接
3. **未来考虑**：根据导师反馈选择长期方案

## 紧急联系人支持

如果以上方案都无法解决问题：

1. **技术问题**：查看 `docs/导师公网访问方案.md`
2. **网络问题**：联系网络管理员检查防火墙
3. **服务问题**：访问Ngrok官网查看服务状态
4. **备选方案**：使用U盘传输构建文件（frontend/build目录）

## 总结

隧道提前离线是免费内网穿透服务的常见问题。建议：

1. **短期**：重新生成链接，并告知导师可能的不稳定性
2. **中期**：部署到GitHub Pages获得永久稳定链接
3. **长期**：根据实际需求选择付费或自建方案

最可靠的方案是使用静态托管服务（GitHub Pages/Vercel），完全免费且永久有效。
