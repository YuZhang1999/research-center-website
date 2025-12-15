import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const stats = [
    { title: '发表论文', value: 150 },
    { title: '授权专利', value: 30 },
    { title: '科研项目', value: 25 },
    { title: '团队成员', value: 40 },
  ];

  const navigate = useNavigate();

  return (
    <div style={{ padding: '0 50px', marginTop: '90px' }}>

      {/* 课题组动态 - 参考canli.dicp.ac.cn风格 */}
      <div style={{ margin: '40px 0' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '20px',
          borderBottom: '2px solid #1890ff',
          paddingBottom: '10px'
        }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '24px', 
            color: '#1d39c4',
            fontWeight: '600'
          }}>
            课题组动态
          </h2>
          <a href="#" style={{ 
            color: '#1890ff', 
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            更多 →
          </a>
        </div>
        
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} md={8}>
            <Card 
              hoverable
              cover={
                <div style={{
                  height: '180px',
                  backgroundColor: '#f0f2f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999'
                }}>
                  图片占位
                </div>
              }
            >
              <Card.Meta
                title="最新研究成果发表"
                description="2025-12-15"
              />
              <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
                课题组在《Nature Communications》发表最新研究成果...
              </p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card 
              hoverable
              cover={
                <div style={{
                  height: '180px',
                  backgroundColor: '#f0f2f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999'
                }}>
                  图片占位
                </div>
              }
            >
              <Card.Meta
                title="学术研讨会成功举办"
                description="2025-12-10"
              />
              <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
                成功举办2025年工业废水处理技术研讨会...
              </p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card 
              hoverable
              cover={
                <div style={{
                  height: '180px',
                  backgroundColor: '#f0f2f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999'
                }}>
                  图片占位
                </div>
              }
            >
              <Card.Meta
                title="合作项目正式启动"
                description="2025-12-05"
              />
              <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
                与某企业合作的光催化废水处理项目正式启动...
              </p>
            </Card>
          </Col>
        </Row>
        
        <div style={{ marginTop: '20px' }}>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            margin: 0
          }}>
            <li style={{ 
              padding: '8px 0', 
              borderBottom: '1px solid #f0f0f0',
              fontSize: '14px'
            }}>
              <a href="#" style={{ color: '#1890ff', textDecoration: 'none' }}>
                课题组新增2项国家自然科学基金项目
              </a>
              <span style={{ float: 'right', color: '#999' }}>2025-11-28</span>
            </li>
            <li style={{ 
              padding: '8px 0', 
              borderBottom: '1px solid #f0f0f0',
              fontSize: '14px'
            }}>
              <a href="#" style={{ color: '#1890ff', textDecoration: 'none' }}>
                课题组学生荣获优秀研究生奖
              </a>
              <span style={{ float: 'right', color: '#999' }}>2025-11-20</span>
            </li>
            <li style={{ 
              padding: '8px 0', 
              borderBottom: '1px solid #f0f0f0',
              fontSize: '14px'
            }}>
              <a href="#" style={{ color: '#1890ff', textDecoration: 'none' }}>
                课题组参加国际催化大会并作报告
              </a>
              <span style={{ float: 'right', color: '#999' }}>2025-11-15</span>
            </li>
            <li style={{ 
              padding: '8px 0', 
              borderBottom: '1px solid #f0f0f0',
              fontSize: '14px'
            }}>
              <a href="#" style={{ color: '#1890ff', textDecoration: 'none' }}>
                课题组实验室设备升级完成
              </a>
              <span style={{ float: 'right', color: '#999' }}>2025-11-10</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 数据统计 */}
      <Row gutter={16} style={{ margin: '40px 0 40px 0' }}>
        {stats.map((stat, index) => (
          <Col span={6} key={index}>
            <Card>
              <Statistic title={stat.title} value={stat.value} />
            </Card>
          </Col>
        ))}
      </Row>

      {/* 最新动态 */}
      <Card title="最新动态" style={{ marginBottom: '20px' }}>
        <p>• 课题组在《Nature Communications》发表最新研究成果</p>
        <p>• 成功举办2025年工业废水处理技术研讨会</p>
        <p>• 与某企业合作的光催化废水处理项目正式启动</p>
        <p>• 课题组新增2项国家自然科学基金项目</p>
      </Card>

    </div>
  );
};

export default Home;
