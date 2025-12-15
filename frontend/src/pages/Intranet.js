import React, { useState, useEffect } from 'react';
import { 
  Layout, Menu, Card, Row, Col, Button, Table, Tag, 
  Avatar, Progress, Statistic, Timeline, Alert, Input,
  Dropdown, Badge, Tooltip, message
} from 'antd';
import {
  DashboardOutlined,
  TeamOutlined,
  FileTextOutlined,
  DatabaseOutlined,
  ExperimentOutlined,
  SafetyOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
  SearchOutlined,
  UserOutlined,
  CalendarOutlined,
  CloudOutlined,
  LockOutlined,
  BarChartOutlined,
  MessageOutlined,
  DownloadOutlined,
  UploadOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const Intranet = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // 检查用户是否已登录
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated || isAuthenticated !== 'true') {
      message.warning('请先登录才能访问内网！');
      navigate('/login');
    }
  }, [navigate]);

  // 处理退出登录
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    message.success('已退出登录');
    navigate('/login');
  };

  // 模拟数据
  const userInfo = {
    name: '王家强',
    role: '课题组负责人',
    avatar: '王',
    department: '材料科学与工程学院',
    lastLogin: '今天 09:30'
  };

  const quickActions = [
    { icon: <UploadOutlined />, title: '上传数据', color: '#1890ff' },
    { icon: <FileTextOutlined />, title: '新建报告', color: '#52c41a' },
    { icon: <CalendarOutlined />, title: '安排会议', color: '#fa8c16' },
    { icon: <MessageOutlined />, title: '发送通知', color: '#722ed1' },
  ];

  const recentDocuments = [
    { id: 1, name: '2025年实验数据汇总.xlsx', type: '数据文件', size: '2.4MB', date: '今天 10:30', user: '李华' },
    { id: 2, name: '课题组周会纪要.docx', type: '会议记录', size: '1.2MB', date: '昨天 14:20', user: '王家强' },
    { id: 3, name: '设备使用手册.pdf', type: '技术文档', size: '5.7MB', date: '前天 09:15', user: '王伟' },
    { id: 4, name: '国际会议资料.zip', type: '学习资料', size: '15.3MB', date: '3天前 16:45', user: '刘芳' },
  ];

  const systemStats = [
    { title: '实验数据总量', value: '128.5GB', icon: <DatabaseOutlined />, color: '#1890ff', progress: 75 },
    { title: '文档数量', value: '2,456', icon: <FileTextOutlined />, color: '#52c41a', progress: 60 },
    { title: '在线成员', value: '18/24', icon: <TeamOutlined />, color: '#fa8c16', progress: 85 },
    { title: '系统负载', value: '42%', icon: <BarChartOutlined />, color: '#722ed1', progress: 42 },
  ];

  const activityLog = [
    { time: '10:30', user: '李华', action: '上传了新的实验数据', type: 'success' },
    { time: '09:45', user: '王伟', action: '更新了设备维护记录', type: 'info' },
    { time: '昨天 16:20', user: '刘芳', action: '分享了国际会议邀请函', type: 'warning' },
    { time: '昨天 14:30', user: '陈强', action: '提交了试剂采购申请', type: 'success' },
    { time: '前天 11:15', user: '赵敏', action: '发布了研究生培养计划', type: 'info' },
  ];

  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: '仪表盘' },
    { key: 'data', icon: <DatabaseOutlined />, label: '实验数据' },
    { key: 'documents', icon: <FileTextOutlined />, label: '文档中心' },
    { key: 'team', icon: <TeamOutlined />, label: '成员管理' },
    { key: 'equipment', icon: <ExperimentOutlined />, label: '设备管理' },
    { key: 'meetings', icon: <CalendarOutlined />, label: '会议管理' },
    { key: 'security', icon: <SafetyOutlined />, label: '安全管理' },
    { key: 'settings', icon: <SettingOutlined />, label: '系统设置' },
  ];

  const columns = [
    { title: '文档名称', dataIndex: 'name', key: 'name' },
    { title: '类型', dataIndex: 'type', key: 'type', render: (type) => <Tag color="blue">{type}</Tag> },
    { title: '大小', dataIndex: 'size', key: 'size' },
    { title: '上传时间', dataIndex: 'date', key: 'date' },
    { title: '上传者', dataIndex: 'user', key: 'user' },
    { title: '操作', key: 'action', render: () => (
      <Button type="link" size="small">下载</Button>
    )},
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      {/* 侧边栏 */}
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        style={{ 
          background: '#001529',
          boxShadow: '2px 0 8px rgba(0,0,0,0.15)'
        }}
      >
        <div style={{ 
          padding: collapsed ? '16px 8px' : '16px 24px', 
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ 
            width: collapsed ? '32px' : '48px', 
            height: collapsed ? '32px' : '48px',
            background: '#1890ff',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: collapsed ? '14px' : '18px',
            margin: '0 auto 8px'
          }}>
            内
          </div>
          {!collapsed && (
            <div style={{ color: '#fff', fontWeight: '600' }}>
              课题组内网系统
            </div>
          )}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          items={menuItems}
          style={{ borderRight: 0, marginTop: '16px' }}
        />

        {!collapsed && (
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0,
            padding: '16px',
            background: 'rgba(0,0,0,0.2)',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px' }}>
              © 2025 课题组内网
              <div style={{ marginTop: '4px' }}>v2.1.0</div>
            </div>
          </div>
        )}
      </Sider>

      <Layout>
        {/* 顶部导航栏 */}
        <Header style={{ 
          background: '#fff', 
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Search
              placeholder="搜索文档、数据、成员..."
              prefix={<SearchOutlined />}
              style={{ width: 300 }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Tooltip title="通知">
              <Badge count={5}>
                <BellOutlined style={{ fontSize: '18px', cursor: 'pointer' }} />
              </Badge>
            </Tooltip>

            <Dropdown
              menu={{
                items: [
                  { key: 'profile', label: '个人资料', icon: <UserOutlined /> },
                  { key: 'settings', label: '账户设置', icon: <SettingOutlined /> },
                  { type: 'divider' },
                  { 
                    key: 'logout', 
                    label: '退出登录', 
                    icon: <LogoutOutlined />,
                    onClick: handleLogout
                  },
                ]
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <Avatar 
                  style={{ 
                    background: '#1890ff',
                    verticalAlign: 'middle'
                  }}
                  size="default"
                >
                  {userInfo.avatar}
                </Avatar>
                <div>
                  <div style={{ fontWeight: '600' }}>{userInfo.name}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{userInfo.role}</div>
                </div>
              </div>
            </Dropdown>
          </div>
        </Header>

        {/* 主要内容区域 */}
        <Content style={{ margin: '24px', overflow: 'initial' }}>
          {/* 欢迎区域 */}
          <Card style={{ marginBottom: '24px', borderRadius: '8px' }}>
            <Row align="middle" justify="space-between">
              <Col>
                <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '600' }}>
                  欢迎回来！
                </h1>
                <p style={{ margin: '8px 0 0', color: '#666' }}>
                  {userInfo.department} • 上次登录：{userInfo.lastLogin}
                </p>
              </Col>
              <Col>
                <Button type="primary" icon={<CloudOutlined />}>
                  数据同步
                </Button>
              </Col>
            </Row>
          </Card>

          {/* 系统状态卡片 */}
          <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
            {systemStats.map((stat, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card style={{ borderRadius: '8px' }}>
                  <Row align="middle">
                    <Col>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: stat.color,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '20px',
                        marginRight: '16px'
                      }}>
                        {stat.icon}
                      </div>
                    </Col>
                    <Col flex="1">
                      <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                        {stat.title}
                      </div>
                      <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>
                        {stat.value}
                      </div>
                      <Progress 
                        percent={stat.progress} 
                        size="small" 
                        strokeColor={stat.color}
                        showInfo={false}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>

          <Row gutter={[24, 24]}>
            {/* 左侧：快速操作和最近文档 */}
            <Col xs={24} lg={16}>
              {/* 快速操作 */}
              <Card 
                title="快速操作" 
                style={{ marginBottom: '24px', borderRadius: '8px' }}
                extra={<Button type="link">查看更多</Button>}
              >
                <Row gutter={[16, 16]}>
                  {quickActions.map((action, index) => (
                    <Col xs={12} sm={6} key={index}>
                      <Card
                        hoverable
                        style={{ 
                          textAlign: 'center',
                          borderRadius: '8px',
                          border: `1px solid ${action.color}20`,
                          background: `${action.color}08`
                        }}
                      >
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: action.color,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: '18px',
                          margin: '0 auto 12px'
                        }}>
                          {action.icon}
                        </div>
                        <div style={{ fontWeight: '600' }}>{action.title}</div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>

              {/* 最近文档 */}
              <Card 
                title="最近文档" 
                style={{ borderRadius: '8px' }}
                extra={<Button type="link">查看全部</Button>}
              >
                <Table
                  columns={columns}
                  dataSource={recentDocuments}
                  pagination={false}
                  size="middle"
                />
              </Card>
            </Col>

            {/* 右侧：活动日志和安全提示 */}
            <Col xs={24} lg={8}>
              {/* 活动日志 */}
              <Card 
                title="活动日志" 
                style={{ marginBottom: '24px', borderRadius: '8px' }}
                extra={<Button type="link" size="small">刷新</Button>}
              >
                <Timeline>
                  {activityLog.map((log, index) => (
                    <Timeline.Item 
                      key={index}
                      color={log.type === 'success' ? 'green' : 
                             log.type === 'warning' ? 'orange' : 'blue'}
                    >
                      <div style={{ fontSize: '13px' }}>
                        <div style={{ fontWeight: '600' }}>{log.action}</div>
                        <div style={{ color: '#666', marginTop: '4px' }}>
                          <UserOutlined style={{ marginRight: '4px' }} />
                          {log.user}
                          <span style={{ margin: '0 8px' }}>•</span>
                          {log.time}
                        </div>
                      </div>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>

              {/* 安全提示 */}
              <Card 
                title="安全状态" 
                style={{ borderRadius: '8px' }}
              >
                <Alert
                  message="系统安全状态良好"
                  description="所有安全措施正常运行，未发现异常访问。"
                  type="success"
                  showIcon
                  style={{ marginBottom: '16px' }}
                />
                
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span>密码强度</span>
                    <span style={{ fontWeight: '600', color: '#52c41a' }}>强</span>
                  </div>
                  <Progress percent={90} size="small" />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span>数据备份</span>
                    <span style={{ fontWeight: '600', color: '#1890ff' }}>已备份</span>
                  </div>
                  <Progress percent={100} size="small" />
                </div>

                <Button type="primary" block icon={<LockOutlined />}>
                  安全检查
                </Button>
              </Card>
            </Col>
          </Row>

          {/* 底部功能区域 */}
          <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
            <Col xs={24} md={12}>
              <Card 
                title="数据统计" 
                style={{ borderRadius: '8px' }}
                extra={<Button type="link">详细报告</Button>}
              >
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Statistic title="本月数据上传" value={128} suffix="GB" />
                  </Col>
                  <Col span={12}>
                    <Statistic title="活跃成员" value={18} suffix="人" />
                  </Col>
                  <Col span={12}>
                    <Statistic title="文档访问" value={2456} suffix="次" />
                  </Col>
                  <Col span={12}>
                    <Statistic title="系统运行" value={99.8} suffix="%" precision={1} />
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card 
                title="常用工具" 
                style={{ borderRadius: '8px' }}
              >
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Button block icon={<DownloadOutlined />} style={{ height: '48px' }}>
                      数据导出
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button block icon={<UploadOutlined />} style={{ height: '48px' }}>
                      批量导入
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button block icon={<FileTextOutlined />} style={{ height: '48px' }}>
                      生成报告
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button block icon={<SettingOutlined />} style={{ height: '48px' }}>
                      系统设置
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          {/* 页脚信息 */}
          <div style={{ 
            marginTop: '48px', 
            padding: '24px', 
            textAlign: 'center',
            color: '#666',
            fontSize: '13px',
            borderTop: '1px solid #f0f0f0'
          }}>
            <p>课题组内网系统 • 版本 2.1.0 • 最后更新：2025年12月15日</p>
            <p style={{ marginTop: '8px' }}>
              <span style={{ marginRight: '16px' }}>技术支持：技术开发部</span>
              <span style={{ marginRight: '16px' }}>服务热线：0871-12345678</span>
              <span>邮箱：support@research.ynu.edu.cn</span>
            </p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Intranet;
