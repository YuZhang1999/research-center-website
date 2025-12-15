import React from 'react';
import { Card, Row, Col, Breadcrumb } from 'antd';
import { HomeOutlined, TrophyOutlined, FileTextOutlined, FileProtectOutlined, ProjectOutlined } from '@ant-design/icons';

const Achievements = () => {
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
            title: '科研成果'
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
          科研成果
        </h1>
        <p style={{ 
          color: '#666', 
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          本研究中心在工业废水光催化处理技术领域取得了一系列重要科研成果，
          包括高水平学术论文、授权专利、科研项目和学术奖励，为工业废水治理提供了理论支持和技术保障。
        </p>
      </div>

      {/* 成果统计模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TrophyOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>成果统计</span>
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
              title="发表论文"
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
                <FileTextOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>150+篇</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>SCI/EI收录论文</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="授权专利"
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
                <FileProtectOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>30+项</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>国家发明专利</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="科研项目"
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
                <ProjectOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>25+项</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>国家级/省部级项目</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="学术奖励"
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
                <TrophyOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>15+项</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>国家级/省部级奖励</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* 代表性成果模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TrophyOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>代表性成果</span>
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
          <Col xs={24} md={8}>
            <Card 
              size="small"
              title="高被引论文"
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
                Enhanced photocatalytic degradation of organic pollutants by TiO2/g-C3N4 heterojunction
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                Applied Catalysis B: Environmental, 2024, IF: 24.3
              </p>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card 
              size="small"
              title="重要专利"
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
                一种TiO2/g-C3N4复合光催化材料及其制备方法
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                专利号：ZL202310123456.7，2023年授权
              </p>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card 
              size="small"
              title="重大科研项目"
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
                工业废水难降解有机物光催化处理关键技术研究
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                国家自然科学基金重点项目，300万元，2023-2027
              </p>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* 成果展示模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TrophyOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>成果展示</span>
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
              title="学术论文列表"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                <p>• Enhanced photocatalytic degradation... (Applied Catalysis B: Environmental, 2024)</p>
                <p>• Single-atom catalysts for efficient... (Nature Communications, 2023)</p>
                <p>• Design of Z-scheme photocatalysts... (Chemical Engineering Journal, 2022)</p>
                <p>• Advanced oxidation processes for... (Environmental Science & Technology, 2022)</p>
              </div>
              <p style={{ fontSize: '12px', color: '#999' }}>更多论文内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              title="科研项目列表"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                <p>• 国家自然科学基金重点项目 (2023-2027, 300万元)</p>
                <p>• 国家重点研发计划课题 (2022-2025, 200万元)</p>
                <p>• 云南省科技重大专项 (2024-2026, 150万元)</p>
                <p>• 企业横向合作项目 (2023-2024, 80万元)</p>
              </div>
              <p style={{ fontSize: '12px', color: '#999' }}>更多项目内容待填充</p>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Achievements;
