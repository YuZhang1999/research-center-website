import React, { useState } from 'react';
import { Card, Form, Input, Button, Checkbox, message, Row, Col, Divider, Alert } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, TeamOutlined, SafetyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true: 登录, false: 注册
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    // 模拟登录/注册过程
    setTimeout(() => {
      if (isLogin) {
        // 登录逻辑
        if (values.username === 'admin' && values.password === '123456') {
          message.success('登录成功！正在跳转到内网...');
          // 保存登录状态到localStorage
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('username', values.username);
          setTimeout(() => {
            navigate('/intranet');
          }, 1000);
        } else {
          message.error('用户名或密码错误！请使用 admin/123456 测试');
        }
      } else {
        // 注册逻辑
        message.success('注册成功！请使用新账号登录。');
        setIsLogin(true);
        form.resetFields();
      }
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
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
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
              <TeamOutlined style={{ marginRight: '12px' }} />
              {isLogin ? '课题组内网登录' : '课题组内网注册'}
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#666', 
              maxWidth: '800px', 
              lineHeight: '1.6',
              margin: '0 auto'
            }}>
              {isLogin 
                ? '仅限课题组内成员访问，请输入您的账号密码登录' 
                : '课题组新成员注册，请填写以下信息完成注册'}
            </p>
          </div>

          {/* 登录/注册卡片 */}
          <Card 
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none',
              marginBottom: '30px'
            }}
          >
            <Alert
              message="访问权限说明"
              description="内网仅对课题组正式成员开放，包含课题组内部资料、实验数据、会议记录等敏感信息。"
              type="warning"
              showIcon
              style={{ marginBottom: '24px' }}
            />

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{ remember: true }}
            >
              {!isLogin && (
                <>
                  <Form.Item
                    name="fullname"
                    label="姓名"
                    rules={[{ required: true, message: '请输入您的姓名' }]}
                  >
                    <Input 
                      prefix={<UserOutlined />} 
                      placeholder="请输入您的真实姓名" 
                      size="large"
                    />
                  </Form.Item>

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
                      placeholder="请输入课题组邮箱" 
                      size="large"
                    />
                  </Form.Item>
                </>
              )}

              <Form.Item
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input 
                  prefix={<UserOutlined />} 
                  placeholder={isLogin ? "请输入用户名" : "请设置用户名"} 
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="密码"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password 
                  prefix={<LockOutlined />} 
                  placeholder={isLogin ? "请输入密码" : "请设置密码"} 
                  size="large"
                />
              </Form.Item>

              {!isLogin && (
                <Form.Item
                  name="confirmPassword"
                  label="确认密码"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: '请确认密码' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('两次输入的密码不一致'));
                      },
                    }),
                  ]}
                >
                  <Input.Password 
                    prefix={<LockOutlined />} 
                    placeholder="请再次输入密码" 
                    size="large"
                  />
                </Form.Item>
              )}

              {isLogin && (
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                  </Form.Item>
                  <a style={{ float: 'right' }} href="#">
                    忘记密码？
                  </a>
                </Form.Item>
              )}

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading} 
                  size="large"
                  style={{ width: '100%', height: '48px', fontSize: '16px' }}
                >
                  {loading ? '处理中...' : (isLogin ? '登录' : '注册')}
                </Button>
              </Form.Item>

              <Divider>
                <span style={{ color: '#999', fontSize: '14px' }}>
                  {isLogin ? '还没有账号？' : '已有账号？'}
                </span>
              </Divider>

              <div style={{ textAlign: 'center' }}>
                <Button 
                  type="link" 
                  size="large"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    form.resetFields();
                  }}
                >
                  {isLogin ? '立即注册' : '返回登录'}
                </Button>
              </div>
            </Form>
          </Card>

          {/* 测试账号提示 */}
          <Card 
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none',
              background: 'linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)'
            }}
          >
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h3 style={{ fontSize: '18px', color: '#389e0d', fontWeight: '600', marginBottom: '12px' }}>
                <SafetyOutlined style={{ marginRight: '8px' }} />
                测试账号
              </h3>
              <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px', lineHeight: '1.7' }}>
                用户名：<strong>admin</strong><br />
                密码：<strong>123456</strong><br />
                使用测试账号可直接登录内网
              </p>
              <Alert
                message="安全提示"
                description="正式使用时请修改默认密码，并定期更换密码以确保账户安全。"
                type="info"
                showIcon
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
