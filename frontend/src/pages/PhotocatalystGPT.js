import React, { useState } from 'react';
import { 
  Card, Row, Col, Button, Input, Typography, Alert, 
  Divider, Tag, Tabs, Avatar, Space, Statistic
} from 'antd';
import { 
  RobotOutlined, ExperimentOutlined, DatabaseOutlined, 
  BulbOutlined, CloudOutlined, SafetyOutlined, 
  MessageOutlined, UserOutlined, TeamOutlined,
  FileTextOutlined, CalculatorOutlined, LineChartOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

const PhotocatalystGPT = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  // 模拟AI响应
  const handleSubmit = () => {
    if (!query.trim()) return;
    
    setLoading(true);
    // 模拟AI处理时间
    setTimeout(() => {
      const responses = [
        "您好！我是PHOTOCATALYST GPT，光催化领域专业AI助手。我可以帮助您解答光催化相关问题、设计实验方案、分析实验数据等。",
        "欢迎使用PHOTOCATALYST GPT！本系统专注于光催化领域，提供专业的AI辅助研究服务。",
        "光催化技术在水处理、空气净化、能源转换等领域有广泛应用。我可以为您提供相关技术咨询和建议。"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setResponse(randomResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ 
      padding: '0 50px', 
      marginTop: '40px',
      paddingTop: '20px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: 'calc(100vh - 64px - 400px)'
    }}>
      {/* 页面标题 */}
      <div style={{ 
        marginBottom: '30px',
        textAlign: 'center',
        padding: '20px 0'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '600', 
          marginBottom: '12px',
          color: '#1890ff'
        }}>
          <RobotOutlined style={{ marginRight: '12px' }} />
          PHOTOCATALYST GPT
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#666', 
          maxWidth: '800px', 
          lineHeight: '1.6',
          margin: '0 auto'
        }}>
          光催化领域专业大语言模型，为合作者提供智能研究辅助服务
        </p>
      </div>

      <Row gutter={[24, 24]}>
        {/* 左侧：AI对话界面 */}
        <Col xs={24} lg={16}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RobotOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
                <span>光催化AI助手</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none',
              marginBottom: '24px'
            }}
          >
            <Alert
              message="访问说明"
              description="本系统面向所有合作者开放，支持注册登录后使用。提供光催化领域专业AI咨询服务。"
              type="info"
              showIcon
              style={{ marginBottom: '20px' }}
            />

            {/* 输入区域 */}
            <div style={{ marginBottom: '20px' }}>
              <TextArea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="请输入光催化相关问题，例如：光催化反应机理、催化剂设计、实验条件优化等..."
                autoSize={{ minRows: 3, maxRows: 6 }}
                style={{ marginBottom: '12px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                  type="primary" 
                  icon={<MessageOutlined />} 
                  loading={loading}
                  onClick={handleSubmit}
                  size="large"
                >
                  {loading ? '思考中...' : '发送问题'}
                </Button>
              </div>
            </div>

            {/* AI响应 */}
            {response && (
              <Card
                style={{ 
                  background: '#f6ffed',
                  border: '1px solid #b7eb8f',
                  borderRadius: '8px',
                  marginTop: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Avatar 
                    icon={<RobotOutlined />} 
                    style={{ background: '#52c41a', marginRight: '12px' }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', marginBottom: '8px', color: '#389e0d' }}>
                      PHOTOCATALYST GPT回答：
                    </div>
                    <Paragraph style={{ marginBottom: 0, whiteSpace: 'pre-wrap' }}>
                      {response}
                    </Paragraph>
                  </div>
                </div>
              </Card>
            )}

            {/* 功能简介 */}
            <Divider>核心功能</Divider>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#1890ff',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    marginRight: '12px'
                  }}>
                    <MessageOutlined />
                  </div>
                  <div>
                    <Text strong>智能问答</Text>
                    <div style={{ fontSize: '12px', color: '#666' }}>解答光催化技术问题</div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#52c41a',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    marginRight: '12px'
                  }}>
                    <ExperimentOutlined />
                  </div>
                  <div>
                    <Text strong>实验设计</Text>
                    <div style={{ fontSize: '12px', color: '#666' }}>推荐实验方案</div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#fa8c16',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    marginRight: '12px'
                  }}>
                    <LineChartOutlined />
                  </div>
                  <div>
                    <Text strong>数据分析</Text>
                    <div style={{ fontSize: '12px', color: '#666' }}>分析实验数据</div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#722ed1',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    marginRight: '12px'
                  }}>
                    <FileTextOutlined />
                  </div>
                  <div>
                    <Text strong>文献检索</Text>
                    <div style={{ fontSize: '12px', color: '#666' }}>检索研究文献</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>

          {/* 使用说明 */}
          <Card 
            title="使用指南"
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
          >
            <Tabs defaultActiveKey="1">
              <TabPane tab="注册登录" key="1">
                <div style={{ padding: '16px 0' }}>
                  <Paragraph>
                    <strong>合作者注册：</strong>本系统面向所有光催化领域合作者开放，支持邮箱注册。
                  </Paragraph>
                  <Paragraph>
                    <strong>登录使用：</strong>注册成功后，使用账号密码登录即可使用所有功能。
                  </Paragraph>
                  <Paragraph>
                    <strong>权限说明：</strong>不同用户角色享有不同的功能权限，具体权限请联系管理员。
                  </Paragraph>
                </div>
              </TabPane>
              <TabPane tab="功能说明" key="2">
                <div style={{ padding: '16px 0' }}>
                  <Paragraph>
                    <strong>智能问答：</strong>回答光催化相关技术问题，提供专业建议。
                  </Paragraph>
                  <Paragraph>
                    <strong>实验设计：</strong>根据研究目标推荐实验方案和条件优化。
                  </Paragraph>
                  <Paragraph>
                    <strong>数据分析：</strong>帮助分析实验数据，提供统计和可视化结果。
                  </Paragraph>
                  <Paragraph>
                    <strong>文献支持：</strong>检索相关研究文献，提供参考文献管理。
                  </Paragraph>
                </div>
              </TabPane>
              <TabPane tab="技术支持" key="3">
                <div style={{ padding: '16px 0' }}>
                  <Paragraph>
                    <strong>技术咨询：</strong>如有技术问题，请联系技术支持团队。
                  </Paragraph>
                  <Paragraph>
                    <strong>功能建议：</strong>欢迎提出功能改进建议，帮助我们完善系统。
                  </Paragraph>
                  <Paragraph>
                    <strong>合作交流：</strong>欢迎光催化领域研究者合作交流，共同推进研究。
                  </Paragraph>
                </div>
              </TabPane>
            </Tabs>
          </Card>
        </Col>

        {/* 右侧：信息面板 */}
        <Col xs={24} lg={8}>
          {/* 系统介绍 */}
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BulbOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
                <span>系统介绍</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none',
              marginBottom: '24px'
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <Text strong>PHOTOCATALYST GPT</Text>
              <Paragraph style={{ marginTop: '8px', fontSize: '14px' }}>
                光催化领域专业大语言模型，基于最新AI技术构建，专门针对光催化研究需求开发。
              </Paragraph>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <Text strong>服务对象</Text>
              <Paragraph style={{ marginTop: '8px', fontSize: '14px' }}>
                面向所有光催化领域合作者，包括课题组内外研究人员、企业技术人员等。
              </Paragraph>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <Text strong>技术特点</Text>
              <ul style={{ margin: '8px 0 0 20px', padding: 0, fontSize: '14px' }}>
                <li>专业领域知识库</li>
                <li>多语言支持</li>
                <li>实时响应</li>
                <li>安全可靠</li>
              </ul>
            </div>

            <Button type="primary" block icon={<UserOutlined />}>
              立即注册
            </Button>
          </Card>

          {/* 统计信息 */}
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CalculatorOutlined style={{ fontSize: '20px', color: '#fa8c16', marginRight: '8px' }} />
                <span>统计信息</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none',
              marginBottom: '24px'
            }}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Statistic 
                  title="注册用户" 
                  value={156} 
                  prefix={<UserOutlined />}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title="今日查询" 
                  value={89} 
                  prefix={<MessageOutlined />}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title="知识条目" 
                  value={12500} 
                  prefix={<DatabaseOutlined />}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title="响应准确率" 
                  value={95.2} 
                  suffix="%" 
                  precision={1}
                  prefix={<BulbOutlined />}
                />
              </Col>
            </Row>
          </Card>

          {/* 合作者信息 */}
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TeamOutlined style={{ fontSize: '20px', color: '#722ed1', marginRight: '8px' }} />
                <span>合作者</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
          >
            <Paragraph style={{ fontSize: '14px' }}>
              本系统欢迎以下合作者使用：
            </Paragraph>
            <ul style={{ margin: '8px 0 16px 20px', padding: 0, fontSize: '14px' }}>
              <li>课题组研究人员</li>
              <li>高校教师和学生</li>
              <li>企业技术人员</li>
              <li>科研机构人员</li>
              <li>光催化领域爱好者</li>
            </ul>
            <Alert
              message="合作共赢"
              description="欢迎光催化领域研究者合作交流，共同推进光催化技术发展。"
              type="success"
              showIcon
            />
          </Card>
        </Col>
      </Row>

      {/* 页脚信息 */}
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        textAlign: 'center',
        color: '#666',
        fontSize: '14px',
        borderTop: '1px solid #f0f0f0'
      }}>
        <p>PHOTOCATALYST GPT • 光催化领域专业AI助手 • 版本 1.0.0</p>
        <p style={{ marginTop: '8px', fontSize: '12px' }}>
          技术支持：云南省工业废水光催化处理工程技术研究中心 • 联系我们：support@photocatalyst-gpt.ynu.edu.cn
        </p>
      </div>
    </div>
  );
};

export default PhotocatalystGPT;
