import React from 'react';
import { Card, Row, Col, Breadcrumb } from 'antd';
import { HomeOutlined, BuildOutlined, ExperimentOutlined, TeamOutlined, SafetyOutlined } from '@ant-design/icons';

const PilotBase = () => {
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
            title: '中试基地'
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
          中试基地
        </h1>
        <p style={{ 
          color: '#666', 
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          本研究中心中试基地是连接实验室研究与工业化应用的重要桥梁，具备从小试到中试的完整研发能力，
          为工业废水处理技术的工程化应用提供技术支撑和验证平台。
        </p>
      </div>

      {/* 基地概况模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BuildOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>基地概况</span>
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
              title="基地面积"
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
                <BuildOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>2000㎡</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>占地面积</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="建设投资"
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
                <BuildOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>1500万元</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>总投资额</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="建成时间"
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
                <BuildOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>2018年</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>建成投入使用</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="处理能力"
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
                <BuildOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>100吨/天</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>废水处理能力</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>内容待填充</p>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* 实验平台模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ExperimentOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>实验平台</span>
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
              title="材料合成平台"
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
                新型光催化剂制备与表征
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                内容待填充
              </p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              size="small"
              title="工艺优化平台"
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
                废水处理工艺参数优化
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                内容待填充
              </p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              size="small"
              title="工程放大平台"
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
                从小试到中试的工艺放大
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                内容待填充
              </p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              size="small"
              title="性能测试平台"
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
                处理效果评估与监测
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                内容待填充
              </p>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* 合作方式模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TeamOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>合作方式</span>
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
              title="技术咨询"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                <p>• 提供技术可行性分析</p>
                <p>• 废水处理方案建议</p>
                <p>• 工艺路线选择指导</p>
                <p>• 技术经济性评估</p>
              </div>
              <p style={{ fontSize: '12px', color: '#999' }}>更多合作内容待填充</p>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              title="中试研究"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                <p>• 在基地开展中试规模实验</p>
                <p>• 工艺参数优化研究</p>
                <p>• 处理效果验证评估</p>
                <p>• 工程化可行性分析</p>
              </div>
              <p style={{ fontSize: '12px', color: '#999' }}>更多合作内容待填充</p>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default PilotBase;
