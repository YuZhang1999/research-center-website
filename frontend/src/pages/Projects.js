import React from 'react';
import { Card, Row, Col, Breadcrumb } from 'antd';
import { HomeOutlined, ProjectOutlined, BuildOutlined, TeamOutlined, CheckCircleOutlined } from '@ant-design/icons';

const Projects = () => {
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
            title: '工程项目'
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
          工程项目
        </h1>
        <p style={{ 
          color: '#666', 
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          云南省工业废水光催化处理工程技术研究中心围绕煤化工、烟草、农副产品深加工、有色金属等重点产业废水，
          开展污水处理新型光催化剂、脱氟除磷等新材料、污水处理新工艺、新设备的开发研究及应用，
          突破工业废水污染治理中的关键科学问题和技术瓶颈。
        </p>
      </div>

      {/* 项目统计模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProjectOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>项目统计</span>
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
              title="完成项目"
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
                <CheckCircleOutlined />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>36项</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>国家及省级科技项目</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>总经费2千余万元</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="日处理量"
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
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>吨级</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>褐煤气化废水处理</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>连续运行3个多月</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="平均去除率"
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
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>38篇</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>SCI研究论文</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>累积影响因子超130</p>
            </Card>
          </Col>
          
          <Col xs={24} md={6}>
            <Card 
              title="合作企业"
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
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>32人</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>研究中心团队</p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>高级职称22人</p>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* 工程案例模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProjectOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>工程案例</span>
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
          <Col xs={24} md={12}>
            <Card 
              size="small"
              title="某制药企业废水处理工程"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                项目类型：褐煤气化废水处理
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                处理规模：吨级处理工艺
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                采用技术：光催化深度处理工艺
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                设备特点：配套撬装反应设备
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                运行情况：连续24小时不间断运行3个多月
              </p>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              size="small"
              title="印染工业园区废水深度处理"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                项目类型：再造烟叶废水处理
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                产业背景：烟草行业废水
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                采用技术：光催化处理工艺
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                设备特点：成套处理设备
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                媒体报道：云南电视台新闻联播"走一线看科技"播出
              </p>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* 技术优势模块 - 基本模板 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProjectOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>技术优势</span>
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
          <Col xs={24} md={8}>
            <Card 
              title="高效处理"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                <p>• 针对煤化工、烟草等重点产业废水</p>
                <p>• 开发新型光催化剂材料</p>
                <p>• 脱氟除磷等新材料研发</p>
                <p>• 污水处理新工艺开发</p>
              </div>
              <p style={{ fontSize: '12px', color: '#999' }}>突破工业废水污染治理关键技术瓶颈</p>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card 
              title="经济节能"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                <p>• 建成三个研发平台</p>
                <p>• 承担36项科技项目</p>
                <p>• 总经费2千余万元</p>
                <p>• 32人专业团队</p>
              </div>
              <p style={{ fontSize: '12px', color: '#999' }}>科技创新能力明显提升</p>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card 
              title="稳定可靠"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px' }}
            >
              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                <p>• 发表SCI论文38篇</p>
                <p>• 累积影响因子超130</p>
                <p>• 8件发明专利授权</p>
                <p>• 25件发明专利授理</p>
              </div>
              <p style={{ fontSize: '12px', color: '#999' }}>成果转化与产业化进程加快</p>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Projects;
