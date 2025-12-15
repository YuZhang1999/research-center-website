import React from 'react';
import { Card, Row, Col, Breadcrumb, Button, List, Input } from 'antd';
import { 
  HomeOutlined, PlayCircleOutlined, CodeOutlined, GlobalOutlined, 
  ExperimentOutlined, DownloadOutlined, DatabaseOutlined, 
  VideoCameraOutlined, LinkOutlined,
  ShareAltOutlined, SearchOutlined
} from '@ant-design/icons';

const Resources = () => {
  // 在线课程数据
  const onlineCourses = [
    {
      id: 1,
      title: '工业废水处理技术',
      platform: '中国大学MOOC',
      instructor: '张教授',
      duration: '12周',
      level: '中级',
      link: 'https://www.icourse163.org/course/XXX'
    },
    {
      id: 2,
      title: '光催化原理与应用',
      platform: '学堂在线',
      instructor: '李教授',
      duration: '10周',
      level: '高级',
      link: 'https://www.xuetangx.com/course/XXX'
    },
    {
      id: 3,
      title: '环境工程实验技术',
      platform: '智慧树',
      instructor: '王教授',
      duration: '8周',
      level: '初级',
      link: 'https://www.zhihuishu.com/course/XXX'
    },
    {
      id: 4,
      title: '废水处理设备操作',
      platform: '超星学习通',
      instructor: '赵工程师',
      duration: '6周',
      level: '实践',
      link: 'http://mooc.chaoxing.com/course/XXX'
    }
  ];

  // 软件教程数据
  const softwareTutorials = [
    {
      id: 1,
      title: 'Origin数据处理',
      software: 'OriginPro',
      type: '数据分析',
      duration: '4小时',
      format: '视频教程',
      link: 'https://www.bilibili.com/video/XXX'
    },
    {
      id: 2,
      title: 'MATLAB数值计算',
      software: 'MATLAB',
      type: '编程计算',
      duration: '6小时',
      format: '视频教程',
      link: 'https://www.bilibili.com/video/XXX'
    },
    {
      id: 3,
      title: 'AutoCAD工程制图',
      software: 'AutoCAD',
      type: '工程绘图',
      duration: '8小时',
      format: '视频教程',
      link: 'https://www.bilibili.com/video/XXX'
    },
    {
      id: 4,
      title: 'Aspen Plus模拟',
      software: 'Aspen Plus',
      type: '流程模拟',
      duration: '10小时',
      format: '视频教程',
      link: 'https://www.bilibili.com/video/XXX'
    }
  ];

  // 学术网站数据
  const academicWebsites = [
    {
      id: 1,
      name: '中国知网',
      category: '文献数据库',
      description: '中文期刊、学位论文全文数据库',
      url: 'https://www.cnki.net'
    },
    {
      id: 2,
      name: 'Web of Science',
      category: '文献数据库',
      description: 'SCI、SSCI等国际期刊数据库',
      url: 'https://www.webofscience.com'
    },
    {
      id: 3,
      name: 'ScienceDirect',
      category: '文献数据库',
      description: 'Elsevier出版社全文数据库',
      url: 'https://www.sciencedirect.com'
    },
    {
      id: 4,
      name: 'ResearchGate',
      category: '学术社交',
      description: '科研人员社交网络平台',
      url: 'https://www.researchgate.net'
    },
    {
      id: 5,
      name: '谷歌学术',
      category: '学术搜索',
      description: '全球学术文献搜索引擎',
      url: 'https://scholar.google.com'
    },
    {
      id: 6,
      name: '小木虫',
      category: '学术论坛',
      description: '科研人员交流社区',
      url: 'http://muchong.com'
    }
  ];

  // 实验数据资源
  const experimentData = [
    {
      id: 1,
      name: '废水处理实验数据',
      type: 'Excel文件',
      size: '15.2MB',
      records: '1200+条',
      description: '光催化废水处理实验原始数据',
      date: '2023-10-15'
    },
    {
      id: 2,
      name: '设备运行参数',
      type: 'Excel文件',
      size: '3.8MB',
      records: '85个',
      description: '光催化设备技术参数数据库',
      date: '2023-09-22'
    },
    {
      id: 3,
      name: '水质监测数据',
      type: '数据库文件',
      size: '45.6MB',
      records: '5000+条',
      description: '长期水质监测数据库',
      date: '2023-11-30'
    },
    {
      id: 4,
      name: '工艺优化参数',
      type: 'Excel文件',
      size: '7.3MB',
      records: '320组',
      description: '废水处理工艺优化参数',
      date: '2023-08-10'
    }
  ];


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
            title: '课题组资源'
          }
        ]}
      />

      {/* 页面标题和搜索 */}
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
          课题组学习资源平台
        </h1>
        <p style={{ 
          color: '#666', 
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto 24px',
          lineHeight: '1.7'
        }}>
          云南省工业废水光催化处理工程技术研究中心学习资源平台，提供丰富的科研学习资源，
          包括在线课程、软件教程、学术网站、实验数据等，助力科研人员成长和学术交流。
        </p>
        
        {/* 搜索框 */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Input
            size="large"
            placeholder="搜索资源、课程、教程..."
            prefix={<SearchOutlined />}
            style={{ 
              borderRadius: '24px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>

      {/* 快速导航模块 */}
      <div style={{ 
        marginBottom: '40px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        padding: '24px'
      }}>
        <h3 style={{ 
          fontSize: '20px', 
          color: '#1d39c4', 
          fontWeight: '600',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          快速导航
        </h3>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={12} sm={6} md={4} lg={3}>
            <Button 
              type="link" 
              href="#online-courses"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                padding: '16px 8px',
                width: '100%'
              }}
            >
              <PlayCircleOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: '8px' }} />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>在线课程</span>
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Button 
              type="link" 
              href="#software-tutorials"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                padding: '16px 8px',
                width: '100%'
              }}
            >
              <CodeOutlined style={{ fontSize: '32px', color: '#52c41a', marginBottom: '8px' }} />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>软件教程</span>
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Button 
              type="link" 
              href="#academic-websites"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                padding: '16px 8px',
                width: '100%'
              }}
            >
              <GlobalOutlined style={{ fontSize: '32px', color: '#fa8c16', marginBottom: '8px' }} />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>学术网站</span>
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Button 
              type="link" 
              href="#experiment-data"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                padding: '16px 8px',
                width: '100%'
              }}
            >
              <ExperimentOutlined style={{ fontSize: '32px', color: '#722ed1', marginBottom: '8px' }} />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>实验数据</span>
            </Button>
          </Col>
        </Row>
      </div>

      {/* 在线课程模块 */}
      <Card 
        id="online-courses"
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PlayCircleOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>在线课程</span>
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
          {onlineCourses.map((course) => (
            <Col xs={24} md={12} lg={6} key={course.id}>
              <Card
                hoverable
                cover={
                  <div style={{
                    height: '120px',
                    background: 'linear-gradient(135deg, #1890ff 0%, #36cfc9 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '48px'
                  }}>
                    <VideoCameraOutlined />
                  </div>
                }
                actions={[
                  <Button type="link" href={course.link} target="_blank" key="view">
                    查看课程
                  </Button>
                ]}
              >
                <Card.Meta
                  title={course.title}
                  description={
                    <div>
                      <p style={{ marginBottom: '4px' }}><strong>平台：</strong>{course.platform}</p>
                      <p style={{ marginBottom: '4px' }}><strong>讲师：</strong>{course.instructor}</p>
                      <p style={{ marginBottom: '4px' }}><strong>时长：</strong>{course.duration}</p>
                      <p><strong>难度：</strong>{course.level}</p>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* 软件教程模块 */}
      <Card 
        id="software-tutorials"
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CodeOutlined style={{ fontSize: '24px', color: '#52c41a', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>软件教程</span>
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
          {softwareTutorials.map((tutorial) => (
            <Col xs={24} md={12} key={tutorial.id}>
              <Card
                hoverable
                style={{ height: '100%' }}
                actions={[
                  <Button type="link" href={tutorial.link} target="_blank" key="watch">
                    观看教程
                  </Button>,
                  <Button type="link" key="download">
                    <DownloadOutlined /> 下载资料
                  </Button>
                ]}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: '#52c41a',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '24px',
                    marginRight: '16px',
                    flexShrink: 0
                  }}>
                    <CodeOutlined />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{tutorial.title}</h4>
                    <p style={{ marginBottom: '4px' }}><strong>软件：</strong>{tutorial.software}</p>
                    <p style={{ marginBottom: '4px' }}><strong>类型：</strong>{tutorial.type}</p>
                    <p style={{ marginBottom: '4px' }}><strong>时长：</strong>{tutorial.duration}</p>
                    <p><strong>格式：</strong>{tutorial.format}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* 学术网站模块 */}
      <Card 
        id="academic-websites"
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <GlobalOutlined style={{ fontSize: '24px', color: '#fa8c16', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>学术网站</span>
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
          {academicWebsites.map((website) => (
            <Col xs={24} md={12} lg={8} key={website.id}>
              <Card
                hoverable
                style={{ height: '100%' }}
                actions={[
                  <Button type="link" href={website.url} target="_blank" key="visit">
                    <LinkOutlined /> 访问网站
                  </Button>
                ]}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#fa8c16',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '20px',
                    marginRight: '12px',
                    flexShrink: 0
                  }}>
                    <GlobalOutlined />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{website.name}</h4>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>{website.description}</p>
                    <div style={{ fontSize: '12px', color: '#999' }}>
                      分类：{website.category}
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* 实验数据模块 */}
      <Card 
        id="experiment-data"
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ExperimentOutlined style={{ fontSize: '24px', color: '#722ed1', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>实验数据</span>
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
        <List
          itemLayout="horizontal"
          dataSource={experimentData}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button type="link" icon={<DownloadOutlined />} key="download">
                  下载
                </Button>,
                <Button type="link" key="preview">
                  预览
                </Button>
              ]}
            >
              <List.Item.Meta
                avatar={
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#722ed1',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '20px'
                  }}>
                    <DatabaseOutlined />
                  </div>
                }
                title={<span style={{ fontSize: '16px', fontWeight: '500' }}>{item.name}</span>}
                description={
                  <div>
                    <p style={{ marginBottom: '4px' }}>{item.description}</p>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#999' }}>
                      <span>类型：{item.type}</span>
                      <span>大小：{item.size}</span>
                      <span>记录数：{item.records}</span>
                      <span>更新：{item.date}</span>
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      {/* 资源统计模块 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DatabaseOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>资源统计</span>
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
            <div style={{ textAlign: 'center' }}>
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
                50+
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>在线课程</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>专业课程资源</p>
            </div>
          </Col>
          
          <Col xs={24} md={6}>
            <div style={{ textAlign: 'center' }}>
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
                30+
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>软件教程</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>实用技能培训</p>
            </div>
          </Col>
          
          <Col xs={24} md={6}>
            <div style={{ textAlign: 'center' }}>
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
                20+
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>学术网站</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>权威资源平台</p>
            </div>
          </Col>
          
          <Col xs={24} md={6}>
            <div style={{ textAlign: 'center' }}>
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
                10GB+
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>实验数据</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>科研原始数据</p>
            </div>
          </Col>
        </Row>
      </Card>


      {/* 资源贡献说明 */}
      <Card 
        style={{ 
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: 'none',
          background: 'linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)'
        }}
        bodyStyle={{ padding: '30px' }}
      >
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', color: '#389e0d', fontWeight: '600', marginBottom: '12px' }}>
            欢迎贡献资源
          </h3>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
            抛砖引玉，欢迎大家将认为优质的资源以评论的形式在下方留言，
            我们将定期根据大家的留言更新学习平台，谢谢大家！
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Button type="primary" icon={<ShareAltOutlined />}>分享资源</Button>
            <Button>留言建议</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Resources;
