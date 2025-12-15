import React from 'react';
import { Card, Row, Col, Breadcrumb, List, Tag, Divider, Timeline } from 'antd';
import { 
  HomeOutlined, ExperimentOutlined, ToolOutlined, 
  SafetyOutlined, ApiOutlined, BulbOutlined,
  TrophyOutlined, TeamOutlined, ProjectOutlined,
  BookOutlined, EnvironmentOutlined, RocketOutlined
} from '@ant-design/icons';

const Research = () => {
  // 研究方向详情 - 基于王家强教授真实研究方向
  const researchAreas = [
    {
      title: '生物模板光催化技术',
      icon: <ExperimentOutlined />,
      description: '利用生物模板制备高效光催化剂及成套设备，实现工业废水的高效处理',
      details: [
        '生物模板法制备介孔TiO2光催化剂',
        '植物提取物模板合成g-C3N4基可见光催化剂',
        '微生物模板制备MOFs基光催化材料',
        'Z型异质结光催化剂的设计与合成',
        '单原子催化材料的生物模板法制备',
      ],
      color: '#1890ff',
      applications: [
        '制药废水深度处理',
        '印染废水脱色降解',
        '化工废水有毒物质去除',
        '垃圾渗滤液处理',
        '重金属废水处理',
      ]
    },
    {
      title: '工业废水处理新材料',
      icon: <ToolOutlined />,
      description: '开发用于污水处理的新型功能材料，实现难降解污染物的高效去除',
      details: [
        '高效除磷材料的开发与应用',
        '重金属选择性吸附材料',
        '脱氟材料的合成与性能研究',
        '介孔材料的可控合成',
        'MOFs材料的环境应用',
      ],
      color: '#52c41a',
      applications: [
        '铅锌冶炼含氟废水处理',
        '电镀废水重金属去除',
        '磷化工废水深度除磷',
        '矿山废水污染治理',
        '放射性废水处理',
      ]
    },
    {
      title: '精细化学品合成',
      icon: <SafetyOutlined />,
      description: '环境友好的精细化学品合成方法，实现绿色化工过程',
      details: [
        '2,5-二羟基对苯二甲酸的绿色合成',
        '4-羟甲基苯甲酸的催化氧化合成',
        '对二甲苯的选择性氧化',
        '生物基平台化合物的转化',
        '环境友好催化剂的开发',
      ],
      color: '#fa8c16',
      applications: [
        '医药中间体的绿色合成',
        '高分子材料单体制备',
        '功能化学品生产',
        '催化剂工业化应用',
        '化工过程优化',
      ]
    },
    {
      title: '环境催化与纳米材料',
      icon: <ApiOutlined />,
      description: '纳米材料在环境治理中的应用，开发高效环境催化技术',
      details: [
        '纳米催化剂的可控制备',
        '单原子催化剂的合成与应用',
        '石墨烯基复合材料的开发',
        '量子点光催化材料',
        '仿生材料的制备与应用',
      ],
      color: '#722ed1',
      applications: [
        'VOCs催化氧化',
        'CO2光催化还原',
        '室内空气净化',
        '水中有机物降解',
        '环境传感器开发',
      ]
    },
  ];

  // 研究特色
  const researchFeatures = [
    {
      title: '多学科交叉',
      description: '材料科学、环境工程、化学工程的深度融合',
      icon: <TeamOutlined />,
      color: '#1890ff'
    },
    {
      title: '基础与应用结合',
      description: '从分子机理到工程应用的全链条研究',
      icon: <BulbOutlined />,
      color: '#52c41a'
    },
    {
      title: '技术创新',
      description: '开发具有自主知识产权的新型光催化技术',
      icon: <RocketOutlined />,
      color: '#fa8c16'
    },
    {
      title: '产学研合作',
      description: '与多家企业建立紧密的产学研合作关系',
      icon: <ProjectOutlined />,
      color: '#722ed1'
    },
    {
      title: '国际视野',
      description: '与国际知名研究机构保持密切合作交流',
      icon: <EnvironmentOutlined />,
      color: '#eb2f96'
    },
    {
      title: '成果转化',
      description: '多项研究成果实现产业化应用',
      icon: <TrophyOutlined />,
      color: '#13c2c2'
    },
  ];

  // 在研项目
  const ongoingProjects = [
    { 
      title: '国家自然科学基金重点项目', 
      period: '2023-2027', 
      fund: '300万元',
      description: '生物模板光催化材料的可控制备及水处理机理研究',
      status: '在研'
    },
    { 
      title: '国家重点研发计划课题', 
      period: '2022-2025', 
      fund: '200万元',
      description: '工业废水深度处理新材料与技术集成',
      status: '在研'
    },
    { 
      title: '云南省科技重大专项', 
      period: '2024-2026', 
      fund: '150万元',
      description: '高原湖泊流域工业废水治理关键技术研发',
      status: '在研'
    },
    { 
      title: '企业横向合作项目', 
      period: '2023-2024', 
      fund: '80万元',
      description: '某化工园区废水处理工艺优化与升级',
      status: '在研'
    },
  ];

  // 实验平台
  const experimentalPlatforms = [
    {
      name: '材料合成平台',
      equipment: [
        '水热/溶剂热反应釜',
        '管式炉（最高温度1200℃）',
        'CVD化学气相沉积系统',
        '高能球磨机',
        '喷雾干燥仪',
        '冷冻干燥机',
      ]
    },
    {
      name: '表征分析平台',
      equipment: [
        'X射线衍射仪（XRD）',
        '扫描电子显微镜（SEM）',
        '透射电子显微镜（TEM）',
        'X射线光电子能谱（XPS）',
        '比表面积分析仪（BET）',
        '紫外-可见漫反射光谱（UV-Vis DRS）',
        '光致发光光谱（PL）',
        '傅里叶变换红外光谱（FT-IR）',
      ]
    },
    {
      name: '性能测试平台',
      equipment: [
        '光催化反应系统（氙灯、LED）',
        '气相色谱-质谱联用仪（GC-MS）',
        '高效液相色谱仪（HPLC）',
        '总有机碳分析仪（TOC）',
        '离子色谱仪（IC）',
        '原子吸收光谱仪（AAS）',
        '电化学工作站',
        '荧光光谱仪',
      ]
    },
  ];

  // 研究进展时间线
  const researchTimeline = [
    { year: '2010', event: '开始生物模板光催化技术研究' },
    { year: '2012', event: '获第一件生物模板光催化发明专利授权' },
    { year: '2014', event: '建成第一个中试规模光催化反应系统' },
    { year: '2016', event: '实现污水处理厂深度除磷产业化应用' },
    { year: '2018', event: '获云南省自然科学奖一等奖' },
    { year: '2020', event: '建成1200方/天柴河水体应急除磷工程' },
    { year: '2022', event: '获批云南省工业废水光催化处理工程技术研究中心' },
    { year: '2024', event: '开展国家重点研发计划项目研究' },
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
            title: '研究方向'
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
          研究方向
        </h1>
        <p style={{ 
          color: '#666', 
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          本研究中心聚焦工业废水光催化处理技术的前沿科学问题和关键技术难题，
          开展从基础研究到工程应用的全链条创新研究，致力于解决云南省及全国工业废水治理的重大需求。
        </p>
      </div>

      {/* 主要研究方向 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ExperimentOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>主要研究方向</span>
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
          {researchAreas.map((area, index) => (
            <Col xs={24} md={12} key={index}>
              <Card
                title={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: area.color,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                      color: '#fff',
                      fontSize: '18px'
                    }}>
                      {area.icon}
                    </div>
                    <span style={{ fontSize: '20px', fontWeight: '600' }}>{area.title}</span>
                  </div>
                }
                style={{ 
                  height: '100%',
                  borderRadius: '10px',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                  border: 'none'
                }}
                bodyStyle={{ padding: '24px' }}
              >
                <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '20px', color: '#333' }}>
                  {area.description}
                </p>
                
                <Divider style={{ margin: '16px 0' }}>研究内容</Divider>
                <List
                  size="small"
                  dataSource={area.details}
                  renderItem={item => (
                    <List.Item style={{ padding: '6px 0', borderBottom: 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: area.color,
                          borderRadius: '50%',
                          marginRight: '10px',
                          marginTop: '8px'
                        }} />
                        <span style={{ fontSize: '14px' }}>{item}</span>
                      </div>
                    </List.Item>
                  )}
                />
                
                <Divider style={{ margin: '16px 0' }}>应用领域</Divider>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {area.applications.map((app, idx) => (
                    <Tag key={idx} color={area.color} style={{ marginBottom: '5px', fontSize: '12px' }}>
                      {app}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* 研究特色 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TrophyOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>研究特色</span>
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
          {researchFeatures.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card 
                size="small"
                style={{ 
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                  border: 'none',
                  height: '100%',
                  textAlign: 'center'
                }}
                bodyStyle={{ padding: '24px' }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: feature.color,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#fff',
                  fontSize: '24px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: feature.color }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* 在研项目与实验平台 */}
      <Row gutter={[32, 32]} style={{ marginBottom: '40px' }}>
        <Col xs={24} md={12}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ProjectOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
                <span style={{ fontSize: '24px', fontWeight: '600' }}>在研项目</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none',
              height: '100%'
            }}
            bodyStyle={{ padding: '24px' }}
          >
            <List
              dataSource={ongoingProjects}
              renderItem={project => (
                <List.Item style={{ padding: '16px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <List.Item.Meta
                    title={
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '16px', fontWeight: '500' }}>{project.title}</span>
                        <Tag color={project.status === '在研' ? 'green' : 'blue'}>{project.status}</Tag>
                      </div>
                    }
                    description={
                      <div>
                        <p style={{ marginBottom: '8px', fontSize: '14px' }}>{project.description}</p>
                        <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#666' }}>
                          <span>执行期：{project.period}</span>
                          <span>经费：{project.fund}</span>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        
        <Col xs={24} md={12}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ToolOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
                <span style={{ fontSize: '24px', fontWeight: '600' }}>实验平台</span>
              </div>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none',
              height: '100%'
            }}
            bodyStyle={{ padding: '24px' }}
          >
            {experimentalPlatforms.map((platform, index) => (
              <div key={index} style={{ marginBottom: index < experimentalPlatforms.length - 1 ? '24px' : '0' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#1890ff' }}>
                  {platform.name}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {platform.equipment.map((item, idx) => (
                    <Tag key={idx} color="blue" style={{ marginBottom: '5px', fontSize: '12px' }}>
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </Col>
      </Row>

      {/* 研究进展时间线 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BookOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>研究进展</span>
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
        <Timeline
          mode="alternate"
          items={researchTimeline.map((item, index) => ({
            color: index % 2 === 0 ? 'blue' : 'green',
            children: (
              <div style={{ padding: '8px 16px', background: '#f8f9fa', borderRadius: '6px' }}>
                <div style={{ fontWeight: 'bold', color: '#1890ff', fontSize: '16px' }}>{item.year}</div>
                <div style={{ marginTop: '4px', fontSize: '14px' }}>{item.event}</div>
              </div>
            )
          }))}
        />
      </Card>

      {/* 研究目标与展望 */}
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BulbOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>研究目标与展望</span>
          </div>
        }
        style={{ 
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
              title="短期目标（2025-2027）"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <List
                size="small"
                dataSource={[
                  '开发2-3种新型高效光催化材料',
                  '建立工业废水处理中试示范工程',
                  '申请发明专利5-8项',
                  '发表高水平SCI论文15-20篇',
                  '培养博士研究生3-5名'
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0', borderBottom: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#1890ff',
                        borderRadius: '50%',
                        marginRight: '10px',
                        marginTop: '8px'
                      }} />
                      <span style={{ fontSize: '14px' }}>{item}</span>
                    </div>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card 
              size="small"
              title="长期展望（2028-2030）"
              style={{ 
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: 'none',
                height: '100%'
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <List
                size="small"
                dataSource={[
                  '建成国家级工业废水处理工程技术研究中心',
                  '实现3-5项技术成果的产业化应用',
                  '形成具有自主知识产权的技术体系',
                  '培养一批高水平科研人才',
                  '在国际环境催化领域产生重要影响'
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0', borderBottom: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#52c41a',
                        borderRadius: '50%',
                        marginRight: '10px',
                        marginTop: '8px'
                      }} />
                      <span style={{ fontSize: '14px' }}>{item}</span>
                    </div>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Research;
