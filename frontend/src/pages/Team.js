import React from 'react';
import { Card, Row, Col, Breadcrumb } from 'antd';
import { HomeOutlined, TeamOutlined } from '@ant-design/icons';

const Team = () => {
  return (
    <div style={{ 
      padding: '0 40px', 
      marginTop: '40px',
      paddingTop: '20px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: 'calc(100vh - 64px - 70px)'
    }}>
      {/* 面包屑导航 */}
      <Breadcrumb
        style={{ 
          margin: '16px 0',
          padding: '12px 20px',
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
        }}
        items={[
          {
            title: <><HomeOutlined /> 首页</>,
            href: '/'
          },
          {
            title: '团队建设'
          }
        ]}
      />

      {/* 页面标题 */}
      <div style={{ 
        marginBottom: '40px',
        textAlign: 'center',
        padding: '30px 0'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          color: '#1d39c4', 
          fontWeight: '600',
          marginBottom: '12px'
        }}>
          团队建设
        </h1>
        <p style={{ 
          color: '#666', 
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          本研究中心拥有一支结构合理、富有创新精神的研究团队，致力于工业废水光催化处理技术的研究与开发，
          营造开放、协作、进取的学术氛围，培养高素质科研人才。
        </p>
      </div>

      {/* 团队结构模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TeamOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>团队结构</span>
          </div>
        }
        style={{ 
          marginBottom: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: 'none'
        }}
        bodyStyle={{ padding: '30px' }}
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <Card 
              title="教师团队"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: '#1890ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#fff',
                fontSize: '32px'
              }}>
                <TeamOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>8人</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>教授、副教授、讲师</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="博士后"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: '#52c41a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#fff',
                fontSize: '32px'
              }}>
                <TeamOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>4人</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>在站博士后研究人员</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="博士研究生"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: '#fa8c16',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#fff',
                fontSize: '32px'
              }}>
                <TeamOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>12人</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>在读博士研究生</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="硕士研究生"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: '#722ed1',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#fff',
                fontSize: '32px'
              }}>
                <TeamOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>20人</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>在读硕士研究生</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* 团队文化模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TeamOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>团队文化</span>
          </div>
        }
        style={{ 
          marginBottom: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: 'none'
        }}
        bodyStyle={{ padding: '30px' }}
      >
        <Row gutter={[24, 24]}>
          <Col xs={24} md={6}>
            <Card 
              size="small"
              title="学术严谨"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                追求科学真理，恪守学术规范，培养严谨的科研态度
              </p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              size="small"
              title="创新进取"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                鼓励原创思维，勇于探索未知，培养创新精神
              </p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              size="small"
              title="团结协作"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                注重团队合作，共享科研资源，营造和谐氛围
              </p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              size="small"
              title="国际视野"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                关注国际前沿，加强交流合作，培养国际竞争力
              </p>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* 招生信息模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TeamOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>招生信息</span>
          </div>
        }
        style={{ 
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: 'none'
        }}
        bodyStyle={{ padding: '30px' }}
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card 
              title="博士研究生招生"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                欢迎具有环境工程、材料科学与工程、化学工程等相关专业背景的优秀硕士毕业生报考。
              </p>
              <div style={{ fontSize: '13px', color: '#999' }}>
                <p>• 招生专业：环境工程、材料科学与工程</p>
                <p>• 招生要求：具有相关专业硕士学位</p>
                <p>• 申请时间：每年3-5月</p>
                <p>• 联系方式：zhangming@ynu.edu.cn</p>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              title="硕士研究生招生"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                欢迎具有环境科学与工程、材料学、化学等相关专业背景的优秀本科毕业生报考。
              </p>
              <div style={{ fontSize: '13px', color: '#999' }}>
                <p>• 招生专业：环境科学与工程、材料学</p>
                <p>• 招生要求：具有相关专业本科学位</p>
                <p>• 申请时间：每年9-10月</p>
                <p>• 联系方式：lihua@ynu.edu.cn</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Team;
