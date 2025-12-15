import React, { useState } from 'react';
import { Card, Row, Col, Form, Input, Button, message, Descriptions, Tag, Divider, Tabs, Timeline, Alert } from 'antd';
import { 
  EnvironmentOutlined, PhoneOutlined, MailOutlined, GlobalOutlined, 
  UserOutlined, MessageOutlined, ClockCircleOutlined, TeamOutlined,
  SafetyOutlined, QuestionCircleOutlined, WechatOutlined, QqOutlined,
  LinkedinOutlined, GithubOutlined, SkypeOutlined, VideoCameraOutlined,
  CalendarOutlined, FileTextOutlined, DownloadOutlined, ShareAltOutlined
} from '@ant-design/icons';
const { TextArea } = Input;
const { TabPane } = Tabs;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const onFinish = (values) => {
    setLoading(true);
    // 模拟提交
    setTimeout(() => {
      message.success('提交成功！我们会尽快与您联系。');
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  const contactInfo = {
    address: '云南省昆明市云南大学材料科学与工程学院 光催化技术研究中心大楼',
    phone: '0871-12345678',
    fax: '0871-87654321',
    email: 'research-center@ynu.edu.cn',
    website: 'www.wastewater-research.ynu.edu.cn',
    wechat: 'YNU_Wastewater_Research',
    qq: '123456789',
    linkedin: 'ynu-wastewater-research',
    github: 'ynu-wastewater-research',
  };

  const members = [
    { 
      name: '王家强', 
      title: '教授/中心主任', 
      phone: '0871-12345678-801', 
      email: 'jqwang@ynu.edu.cn',
      research: '光催化材料设计、废水处理工艺优化',
      role: '课题组负责人，全面负责中心工作'
    },
    { 
      name: '李华', 
      title: '副教授/科研副主任', 
      phone: '0871-12345678-802', 
      email: 'lihua@ynu.edu.cn',
      research: '环境催化、反应机理研究',
      role: '科研项目管理，学术交流协调'
    },
    { 
      name: '王伟', 
      title: '副教授/技术总监', 
      phone: '0871-12345678-803', 
      email: 'wangwei@ynu.edu.cn',
      research: '设备研发、工艺放大',
      role: '技术研发，实验设备管理'
    },
    { 
      name: '刘芳', 
      title: '讲师/国际合作主管', 
      phone: '0871-12345678-804', 
      email: 'liufang@ynu.edu.cn',
      research: '国际学术交流、合作项目管理',
      role: '国际合作，访问学者管理'
    },
    { 
      name: '陈强', 
      title: '高级工程师', 
      phone: '0871-12345678-805', 
      email: 'chenqiang@ynu.edu.cn',
      research: '实验室安全、设备维护',
      role: '实验室管理，试剂采购'
    },
    { 
      name: '赵敏', 
      title: '讲师/学生工作主管', 
      phone: '0871-12345678-806', 
      email: 'zhaomin@ynu.edu.cn',
      research: '研究生培养、学术活动组织',
      role: '研究生管理，学生事务'
    },
  ];

  const recruitment = [
    { 
      position: '博士后研究员', 
      requirements: '环境工程、材料科学、化学工程相关专业博士', 
      deadline: '长期有效',
      salary: '25-35万/年',
      benefits: '提供住房补贴，科研启动经费，子女入学支持'
    },
    { 
      position: '科研助理', 
      requirements: '硕士学历，有实验室经验者优先，熟悉光催化技术', 
      deadline: '2025年12月31日',
      salary: '8-12万/年',
      benefits: '五险一金，带薪年假，培训机会'
    },
    { 
      position: '访问学者', 
      requirements: '副教授以上职称，研究方向相关，有国际合作经验', 
      deadline: '长期有效',
      salary: '面议',
      benefits: '提供住宿，科研经费，国际交流机会'
    },
    { 
      position: '联合培养研究生', 
      requirements: '在读硕士/博士研究生，导师同意，研究方向匹配', 
      deadline: '每年3月、9月',
      salary: '生活补贴+科研津贴',
      benefits: '双导师指导，实验条件支持，论文发表支持'
    },
  ];

  const faqs = [
    {
      question: '如何申请访问学者？',
      answer: '提交个人简历、研究计划、推荐信至合作交流部邮箱，初审通过后安排视频面试，通过后办理相关手续。',
      category: '学术交流'
    },
    {
      question: '技术合作的具体流程是什么？',
      answer: '1. 提交合作意向书；2. 技术评估与可行性分析；3. 方案设计与预算编制；4. 签订合作协议；5. 项目实施与验收。',
      category: '技术合作'
    },
    {
      question: '如何获取中心的技术资料和专利信息？',
      answer: '通过网站技术资料下载区或联系技术开发部获取，部分核心专利需签订保密协议后提供。',
      category: '资料获取'
    },
    {
      question: '中心是否接受企业委托测试？',
      answer: '是的，我们接受企业委托的水质分析、工艺验证等测试服务，需提前预约并签订委托测试协议。',
      category: '测试服务'
    },
    {
      question: '研究生招生有哪些要求？',
      answer: '需通过全国硕士研究生统一考试或申请考核制，具体专业要求请参考云南大学研究生招生简章。',
      category: '招生信息'
    },
    {
      question: '如何预约参观实验室？',
      answer: '提前一周通过邮件或电话预约，提供参观人员信息、参观目的，经审核通过后安排参观时间。',
      category: '参观访问'
    },
  ];

  const socialMedia = [
    { platform: '微信', icon: <WechatOutlined />, account: 'YNU_Wastewater_Research', color: '#07c160' },
    { platform: 'QQ', icon: <QqOutlined />, account: '123456789', color: '#12b7f5' },
    { platform: 'GitHub', icon: <GithubOutlined />, account: 'ynu-wastewater-research', color: '#333' },
  ];

  const officeHours = [
    { day: '周一至周五', time: '上午 8:30-12:00，下午 14:00-17:30', note: '正常办公' },
    { day: '周六', time: '9:00-12:00', note: '值班制，需提前预约' },
    { day: '周日及法定节假日', time: '休息', note: '紧急事务请联系值班电话' },
    { day: '寒暑假', time: '周一至周五 9:00-16:00', note: '值班制，具体安排见通知' },
  ];

  return (
    <div style={{ 
      padding: '0 50px', 
      marginTop: '40px',
      paddingTop: '20px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: 'calc(100vh - 64px - 400px)'
    }}>
        {/* 页面标题和介绍 - 简化版 */}
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
            <TeamOutlined style={{ marginRight: '12px' }} />
            联系我们
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: '#666', 
            maxWidth: '800px', 
            lineHeight: '1.6',
            margin: '0 auto'
          }}>
            欢迎各界人士与我们联系，开展学术交流、技术合作、项目咨询、人才培养等合作。
          </p>
        </div>

        {/* 标签页导航 */}
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab}
          style={{ 
            marginBottom: '30px',
            background: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
          }}
          items={[
            {
              key: 'contact',
              label: (
                <span>
                  <PhoneOutlined /> 联系信息
                </span>
              ),
            },
            {
              key: 'consultation',
              label: (
                <span>
                  <MessageOutlined /> 合作咨询
                </span>
              ),
            },
            {
              key: 'members',
              label: (
                <span>
                  <TeamOutlined /> 成员联系
                </span>
              ),
            },
            {
              key: 'recruitment',
              label: (
                <span>
                  <UserOutlined /> 招聘信息
                </span>
              ),
            },
            {
              key: 'faq',
              label: (
                <span>
                  <QuestionCircleOutlined /> 常见问题
                </span>
              ),
            },
          ]}
        />

        {/* 联系信息标签页 */}
        {activeTab === 'contact' && (
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Card 
                title={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <EnvironmentOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
                    <span>基本信息</span>
                  </div>
                }
                style={{ 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: 'none'
                }}
              >
                <Descriptions column={1} size="middle">
                  <Descriptions.Item label={<><EnvironmentOutlined /> 地址</>}>
                    <strong>{contactInfo.address}</strong>
                  </Descriptions.Item>
                  <Descriptions.Item label={<><PhoneOutlined /> 电话</>}>
                    <strong>{contactInfo.phone}</strong> (工作日 8:30-17:30)
                  </Descriptions.Item>
                  <Descriptions.Item label="传真">
                    <strong>{contactInfo.fax}</strong>
                  </Descriptions.Item>
                  <Descriptions.Item label={<><MailOutlined /> 邮箱</>}>
                    <strong>{contactInfo.email}</strong>
                  </Descriptions.Item>
                  <Descriptions.Item label={<><GlobalOutlined /> 网站</>}>
                    <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer">
                      {contactInfo.website}
                    </a>
                  </Descriptions.Item>
                </Descriptions>

                <Divider />

                <div>
                  <h4><ClockCircleOutlined style={{ marginRight: '8px' }} /> 办公时间</h4>
                  <Timeline>
                    {officeHours.map((item, index) => (
                      <Timeline.Item key={index} color={index === 0 ? 'blue' : 'gray'}>
                        <strong>{item.day}</strong>: {item.time}
                        <div style={{ color: '#666', fontSize: '13px' }}>{item.note}</div>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </div>
              </Card>
            </Col>

            <Col span={12}>
              <Card 
                title={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ShareAltOutlined style={{ fontSize: '20px', color: '#52c41a', marginRight: '8px' }} />
                    <span>社交媒体</span>
                  </div>
                }
                style={{ 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: 'none'
                }}
              >
                <Row gutter={[16, 16]}>
                  {socialMedia.map((media, index) => (
                    <Col span={12} key={index}>
                      <Card
                        size="small"
                        style={{ 
                          borderLeft: `4px solid ${media.color}`,
                          height: '100%'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                          <div style={{ 
                            width: '32px', 
                            height: '32px', 
                            background: media.color,
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            marginRight: '12px'
                          }}>
                            {media.icon}
                          </div>
                          <div>
                            <div style={{ fontWeight: '600' }}>{media.platform}</div>
                            <div style={{ fontSize: '12px', color: '#666' }}>{media.account}</div>
                          </div>
                        </div>
                        <Button type="link" size="small" style={{ padding: 0 }}>
                          关注我们
                        </Button>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <Divider />

                <div>
                  <h4><SafetyOutlined style={{ marginRight: '8px' }} /> 来访路线</h4>
                  <Alert
                    message="交通指引"
                    description={
                      <div>
                        <p>• ✈️ 机场：乘坐机场大巴至云南大学站，换乘校内交通车</p>
                        <p>• 🚆 火车站：乘坐地铁1号线至云南大学站，从A出口出站</p>
                        <p>• 🚗 自驾：导航至"云南大学材料科学与工程学院"，校内停车需提前预约</p>
                        <p>• 🚌 公交：乘坐84路、115路、168路至云南大学站</p>
                      </div>
                    }
                    type="info"
                    showIcon
                  />
                  <Tag color="blue" style={{ marginTop: '12px' }}>校内停车需提前预约</Tag>
                </div>
              </Card>
            </Col>
          </Row>
        )}

        {/* 合作咨询标签页 */}
        {activeTab === 'consultation' && (
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <MessageOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
                <span>合作咨询表单</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
          >
            <Alert
              message="填写说明"
              description="请详细填写以下信息，我们将尽快与您联系。带 * 的字段为必填项。"
              type="info"
              showIcon
              style={{ marginBottom: '24px' }}
            />
            
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="姓名"
                    rules={[{ required: true, message: '请输入您的姓名' }]}
                  >
                    <Input 
                      prefix={<UserOutlined />} 
                      placeholder="请输入您的姓名" 
                      size="large"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="organization"
                    label="单位/学校"
                    rules={[{ required: true, message: '请输入您的单位或学校' }]}
                  >
                    <Input 
                      placeholder="请输入您的单位或学校" 
                      size="large"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="邮箱"
                    rules={[
                      { required: true, message: '请输入您的邮箱' },
                      { type: 'email', message: '请输入有效的邮箱地址' }
                    ]}
                  >
                    <Input 
                      prefix={<MailOutlined />} 
                      placeholder="请输入您的邮箱" 
                      size="large"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="电话"
                    rules={[{ required: true, message: '请输入您的联系电话' }]}
                  >
                    <Input 
                      prefix={<PhoneOutlined />} 
                      placeholder="请输入您的联系电话" 
                      size="large"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="type"
                label="咨询类型"
                rules={[{ required: true, message: '请选择咨询类型' }]}
              >
                <Input 
                  placeholder="如：技术合作、学术交流、项目咨询、人才培养、测试服务等" 
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="subject"
                label="主题"
                rules={[{ required: true, message: '请输入咨询主题' }]}
              >
                <Input 
                  placeholder="请输入咨询主题" 
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="message"
                label="详细内容"
                rules={[{ required: true, message: '请输入详细内容' }]}
              >
                <TextArea 
                  rows={6} 
                  placeholder="请详细描述您的需求、问题或合作意向..."
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="attachment"
                label="附件"
              >
                <Input 
                  type="file"
                  style={{ padding: '8px 0' }}
                />
                <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                  支持格式：PDF, Word, Excel, 图片 (最大10MB)
                </div>
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading} 
                  size="large"
                  style={{ width: '100%', height: '48px', fontSize: '16px' }}
                >
                  {loading ? '提交中...' : '提交咨询'}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        )}

        {/* 成员联系标签页 */}
        {activeTab === 'members' && (
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TeamOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
                <span>课题组成员联系方式</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
          >
            <Row gutter={[24, 24]}>
              {members.map((member, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Card
                    hoverable
                    style={{ 
                      height: '100%',
                      borderTop: `4px solid ${index % 3 === 0 ? '#1890ff' : index % 3 === 1 ? '#52c41a' : '#722ed1'}`
                    }}
                  >
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                      {member.name}
                    </h3>
                    <p style={{ marginBottom: '8px' }}>
                      <strong>职务：</strong>{member.title}
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <strong>电话：</strong>{member.phone}
                    </p>
                    <p style={{ marginBottom: '12px' }}>
                      <strong>邮箱：</strong>
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </p>
                    <div style={{ 
                      padding: '8px 12px', 
                      background: '#f6ffed', 
                      borderRadius: '6px',
                      fontSize: '13px',
                      marginBottom: '8px'
                    }}>
                      <strong>研究方向：</strong>{member.research}
                    </div>
                    <div style={{ 
                      padding: '8px 12px', 
                      background: '#e6f7ff', 
                      borderRadius: '6px',
                      fontSize: '13px'
                    }}>
                      <strong>课题组角色：</strong>{member.role}
                    </div>
                    <Tag color="blue" style={{ marginTop: '12px' }}>工作日 9:00-17:00</Tag>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        )}

        {/* 招聘信息标签页 */}
        {activeTab === 'recruitment' && (
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <UserOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
                <span>招聘信息</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
          >
            <Alert
              message="招聘流程"
              description="简历投递 → 初步筛选 → 面试 → 录用通知 → 入职办理"
              type="info"
              showIcon
              style={{ marginBottom: '24px' }}
            />
            
            <Row gutter={[24, 24]}>
              {recruitment.map((job, index) => (
                <Col span={24} key={index}>
                  <Card
                    style={{ 
                      borderLeft: `4px solid ${index % 4 === 0 ? '#1890ff' : index % 4 === 1 ? '#52c41a' : index % 4 === 2 ? '#fa8c16' : '#722ed1'}`
                    }}
                  >
                    <Row gutter={24} align="middle">
                      <Col span={16}>
                        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
                          {job.position}
                        </h3>
                        <p style={{ marginBottom: '8px' }}>
                          <strong>要求：</strong>{job.requirements}
                        </p>
                        <p style={{ marginBottom: '8px' }}>
                          <strong>薪资：</strong>
                          <Tag color="green">{job.salary}</Tag>
                        </p>
                        <p>
                          <strong>福利：</strong>{job.benefits}
                        </p>
                      </Col>
                      <Col span={8} style={{ textAlign: 'right' }}>
                        <div style={{ marginBottom: '16px' }}>
                          <Tag color="red">截止：{job.deadline}</Tag>
                        </div>
                        <Button type="primary" size="large" style={{ marginBottom: '8px' }}>
                          <FileTextOutlined /> 立即申请
                        </Button>
                        <br />
                        <Button type="link" size="small">
                          <DownloadOutlined /> 下载职位描述
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        )}

        {/* 常见问题标签页 */}
        {activeTab === 'faq' && (
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <QuestionCircleOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
                <span>常见问题 (FAQ)</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
          >
            <Row gutter={[24, 24]}>
              {faqs.map((faq, index) => (
                <Col xs={24} md={12} key={index}>
                  <Card
                    size="small"
                    style={{ 
                      height: '100%',
                      borderTop: `3px solid ${faq.category === '学术交流' ? '#1890ff' : 
                                  faq.category === '技术合作' ? '#52c41a' : 
                                  faq.category === '资料获取' ? '#fa8c16' : 
                                  faq.category === '测试服务' ? '#722ed1' : 
                                  faq.category === '招生信息' ? '#13c2c2' : '#eb2f96'}`
                    }}
                  >
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                      {faq.question}
                    </h4>
                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>
                      {faq.answer}
                    </p>
                    <Tag color="default">{faq.category}</Tag>
                    <Button type="link" size="small" style={{ float: 'right' }}>
                      查看更多
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>

            <Divider />

            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                没有找到您的问题？
              </h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                请通过合作咨询表单联系我们，或直接拨打我们的咨询电话。
              </p>
              <Button 
                type="primary" 
                size="large"
                onClick={() => setActiveTab('consultation')}
                style={{ marginRight: '12px' }}
              >
                <MessageOutlined /> 提交咨询
              </Button>
              <Button 
                size="large"
                onClick={() => setActiveTab('contact')}
              >
                <PhoneOutlined /> 查看联系方式
              </Button>
            </div>
          </Card>
        )}

        {/* 底部提示信息 */}
        <Card 
          style={{ 
            marginTop: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            border: 'none',
            background: 'linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)'
          }}
          bodyStyle={{ padding: '30px' }}
        >
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', color: '#389e0d', fontWeight: '600', marginBottom: '12px' }}>
              <CalendarOutlined style={{ marginRight: '8px' }} />
              温馨提示
            </h3>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px', lineHeight: '1.7' }}>
              为确保您的问题得到及时处理，建议在工作时间内联系我们。<br />
              对于紧急事务，请直接拨打值班电话：0871-12345678（24小时）。<br />
              我们承诺在收到咨询后2个工作日内给予回复。
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <Button type="primary" icon={<FileTextOutlined />} size="large">
                下载资料
              </Button>
            </div>
          </div>
        </Card>
      </div>
  );
};

export default Contact;
