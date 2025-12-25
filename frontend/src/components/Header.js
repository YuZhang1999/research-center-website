import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { HomeOutlined, UserOutlined, ExperimentOutlined, TeamOutlined, TrophyOutlined, ProjectOutlined, BuildOutlined, BookOutlined, CloudOutlined, ContactsOutlined, RobotOutlined, FilterOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header: AntHeader } = Layout;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 根据当前路径确定选中的菜单项
  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return ['home'];
    if (path === '/professor') return ['professor'];
    if (path === '/research') return ['research'];
    if (path === '/team') return ['team'];
    if (path === '/achievements') return ['achievements'];
    if (path === '/projects') return ['projects'];
    if (path === '/pilot-base') return ['pilot'];
    if (path === '/resources') return ['resources'];
    if (path === '/material-filter') return ['material-filter'];
    if (path === '/photocatalyst-gpt') return ['photocatalyst-gpt'];
    if (path === '/contact') return ['contact'];
    if (path === '/intranet') return ['intranet'];
    if (path === '/login') return ['intranet']; // 登录页面也高亮内网菜单项
    return ['home'];
  };

  const handleMenuClick = (e) => {
    switch(e.key) {
      case 'home':
        navigate('/');
        break;
      case 'professor':
        navigate('/professor');
        break;
      case 'research':
        navigate('/research');
        break;
      case 'team':
        navigate('/team');
        break;
      case 'achievements':
        navigate('/achievements');
        break;
      case 'projects':
        navigate('/projects');
        break;
      case 'pilot':
        navigate('/pilot-base');
        break;
      case 'contact':
        navigate('/contact');
        break;
      case 'resources':
        navigate('/resources');
        break;
      case 'material-filter':
        navigate('/material-filter');
        break;
      case 'photocatalyst-gpt':
        navigate('/photocatalyst-gpt');
        break;
      case 'intranet':
        // 检查是否已登录
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated === 'true') {
          // 已登录，跳转到内网页面
          navigate('/intranet');
        } else {
          // 未登录，跳转到登录页面
          navigate('/login');
        }
        break;
      default:
        navigate('/');
    }
  };

  const menuItems = [
    { key: 'home', label: '首页', icon: <HomeOutlined /> },
    { key: 'professor', label: '教授简介', icon: <UserOutlined /> },
    { key: 'research', label: '研究方向', icon: <ExperimentOutlined /> },
    { key: 'team', label: '团队建设', icon: <TeamOutlined /> },
    { key: 'achievements', label: '科研成果', icon: <TrophyOutlined /> },
    { key: 'projects', label: '工程项目', icon: <ProjectOutlined /> },
    { key: 'pilot', label: '中试基地', icon: <BuildOutlined /> },
    { key: 'resources', label: '课题组资源', icon: <BookOutlined /> },
    { key: 'material-filter', label: '材料智能筛选系统', icon: <FilterOutlined /> },
    { key: 'photocatalyst-gpt', label: 'PHOTOCATALYST GPT', icon: <RobotOutlined /> },
    { key: 'intranet', label: '内网', icon: <CloudOutlined /> },
    { key: 'contact', label: '联系我们', icon: <ContactsOutlined /> },
  ];

  return (
    <AntHeader style={{ 
      background: '#fff', 
      padding: '20px 20px 0 20px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      height: 'auto',
      minHeight: '100px'
    }}>
      {/* 第一行：Logo和标题 */}
      <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
        <Col>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <div style={{
              width: '60px',
              height: '60px',
              background: '#1890ff',
              borderRadius: '8px',
              marginRight: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '24px',
              flexShrink: 0
            }}>
              工
            </div>
            <div>
              <h1 style={{ 
                margin: 0, 
                fontSize: '24px', 
                color: '#1890ff',
                fontWeight: '600',
                lineHeight: '1.3'
              }}>
                云南省工业废水光催化处理工程技术研究中心
              </h1>
              <p style={{ 
                margin: '4px 0 0 0', 
                fontSize: '14px', 
                color: '#666',
                lineHeight: '1.4'
              }}>
                Yunnan Engineering Research Center for Photocatalytic Treatment of Industrial Wastewater
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* 第二行：菜单 */}
      <Row style={{ borderTop: '1px solid #f0f0f0', paddingTop: '8px' }}>
        <Col span={24}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'auto',
            overflowY: 'hidden',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
          }}>
            <Menu
              mode="horizontal"
              selectedKeys={getSelectedKey()}
              items={menuItems}
              onClick={handleMenuClick}
              style={{ 
                borderBottom: 'none',
                flex: 'none',
                whiteSpace: 'nowrap',
                fontSize: '13px',
                lineHeight: '32px',
                minWidth: 'max-content'
              }}
              overflowedIndicator={null}
              disabledOverflow={true}
            />
          </div>
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
