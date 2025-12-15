# 云南省工业废水光催化处理工程技术研究中心网站

## 项目概述
本项目为"云南省工业废水光催化处理工程技术研究中心"课题组网站，是一个集科研展示、学术交流、学习资源和信息管理于一体的综合性平台。

## 技术栈
- **前端**: React.js + Ant Design + CSS3/Sass
- **后端**: Node.js + Express (或 Python + Django)
- **数据库**: MySQL/PostgreSQL
- **缓存**: Redis
- **部署**: Linux + Nginx + Docker

## 项目结构

```
课题组网站/
├── package.json               # 项目根配置（workspace配置）
├── package-lock.json          # 依赖锁文件
├── README.md                  # 项目说明文档
├── frontend/                  # 前端项目
│   ├── package.json          # 前端依赖配置
│   ├── .env                  # 前端环境变量
│   ├── build/                # 生产构建文件（可直接部署）
│   │   ├── index.html       # 网站主页面
│   │   ├── asset-manifest.json
│   │   └── static/          # 静态资源（CSS、JS）
│   ├── public/               # 公共资源
│   │   └── index.html       # 开发环境HTML模板
│   └── src/                  # 源代码
│       ├── App.js           # 应用主组件
│       ├── index.js         # 应用入口
│       ├── assets/          # 静态资源
│       │   ├── css/         # 样式文件
│       │   ├── images/      # 图片资源
│       │   └── icons/       # 图标资源
│       ├── components/      # 可复用组件
│       │   ├── Header.js   # 头部导航
│       │   ├── Footer.js   # 底部信息
│       │   └── Layout.js   # 页面布局
│       ├── pages/           # 页面组件（12个主要页面）
│       │   ├── Home.js     # 首页
│       │   ├── Professor.js # 教授简介
│       │   ├── Research.js # 研究方向
│       │   ├── Team.js     # 团队建设
│       │   ├── Achievements.js # 科研成果
│       │   ├── Projects.js # 工程项目
│       │   ├── PilotBase.js # 中试基地
│       │   ├── Contact.js  # 联系我们
│       │   ├── Resources.js # 学习资源
│       │   ├── Intranet.js # 内部网络
│       │   ├── Login.js    # 登录页面
│       │   └── PhotocatalystGPT.js # AI助手
│       ├── services/        # API服务
│       ├── utils/           # 工具函数
│       ├── context/         # React Context
│       └── hooks/           # 自定义Hooks
├── backend/                  # 后端项目（框架已搭建）
│   ├── package.json         # 后端依赖配置
│   ├── src/                 # 源代码目录结构
│   │   ├── config/         # 配置文件
│   │   ├── controllers/    # 控制器
│   │   ├── models/         # 数据模型
│   │   ├── routes/         # 路由定义
│   │   ├── middleware/     # 中间件
│   │   └── utils/          # 工具函数
│   ├── public/             # 静态文件
│   └── uploads/            # 上传文件目录
├── docs/                    # 项目文档
│   ├── 课题组网站框架构建方案.md # 项目详细方案
│   ├── 导师查看说明.md     # 导师查看指南
│   ├── 交付总结.md         # 项目交付总结
│   ├── 启动说明.md         # 开发启动说明
│   ├── requirements/       # 需求文档
│   ├── design/            # 设计文档
│   └── api/               # API文档
├── 启动网站/              # 启动脚本文件夹
│   ├── 启动网站.bat      # Windows一键启动脚本
│   ├── 启动网站.sh       # Linux/Mac启动脚本
│   └── 测试网站.bat      # 网站测试工具
├── database/                # 数据库相关
│   ├── migrations/         # 数据库迁移文件
│   └── seeds/              # 种子数据
├── deployment/              # 部署配置
│   ├── docker/             # Docker配置
│   ├── nginx/              # Nginx配置
│   └── scripts/            # 部署脚本
├── resources/               # 项目资源
│   ├── images/             # 设计图片
│   ├── videos/             # 视频资源
│   ├── documents/          # 文档资源
│   └── templates/          # 模板文件
├── config/                  # 配置文件
├── tests/                   # 测试目录
│   ├── frontend/           # 前端测试
│   ├── backend/            # 后端测试
│   └── integration/        # 集成测试
└── node_modules/            # 项目依赖（自动生成）
```

## 主要功能模块

### 1. 信息展示模块
- 首页展示
- 教授简介
- 研究方向
- 团队建设
- 科研成果
- 工程项目
- 中试基地介绍

### 2. 学习平台模块
- 课程资源
- 实验指导
- 软件工具
- 文献推荐
- 在线测试

### 3. 资源管理模块
- 仪器预约系统
- 文档管理
- 日程安排
- 成果登记
- 内部通讯

### 4. 交流互动模块
- 访客留言板
- 学术讨论区
- 合作意向提交
- 问题反馈

## 开发计划

### 第一阶段：基础框架搭建 (2周)
- 项目初始化，技术栈选型
- 基础页面布局和样式
- 导航菜单和底部链接实现
- 响应式设计适配

### 第二阶段：核心页面开发 (3周)
- 首页和各导航页面开发
- 图片和内容管理系统
- 基础交互功能实现
- 移动端优化

### 第三阶段：功能模块开发 (3周)
- 学习平台功能实现
- 组内资源管理系统
- 留言板功能开发
- 搜索功能实现

### 第四阶段：测试和优化 (2周)
- 功能测试和bug修复
- 性能优化和SEO优化
- 安全性测试
- 多浏览器兼容性测试

### 第五阶段：部署上线 (1周)
- 服务器环境配置
- 数据库部署
- 域名解析和SSL配置
- 正式上线和监控

## 快速开始

### 环境要求
- Node.js 16+
- Python 3.8+ (如果使用Django后端)
- MySQL 8.0+ 或 PostgreSQL 13+
- Redis 6.0+

### 安装步骤
1. 克隆项目
2. 安装依赖：`npm install` (前端) 和 `npm install` 或 `pip install` (后端)
3. 配置数据库连接
4. 运行开发服务器

## 维护和更新

### 内容更新
- 每月更新科研成果和新闻动态
- 定期更新团队成员信息
- 及时发布学术活动和会议信息
- 维护学习资源和数据库

### 技术维护
- 定期备份网站数据
- 监控网站性能和安全性
- 更新依赖包和修复安全漏洞
- 优化网站速度和用户体验

## 许可证
本项目仅供"云南省工业废水光催化处理工程技术研究中心"课题组内部使用。

## 联系方式
- 项目负责人：网站项目组
- 创建日期：2025年12月14日
- 最后更新：2025年12月15日（项目结构优化）
