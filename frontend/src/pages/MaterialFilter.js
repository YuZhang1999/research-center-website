import React, { useState } from 'react';
import { 
  Layout, Typography, Card, Row, Col, Button, Space, Input, Select, Form, 
  Slider, Checkbox, Tag, Divider, Tooltip, Menu, message
} from 'antd';
import { 
  FilterOutlined, SearchOutlined, DownloadOutlined, UploadOutlined,
  DatabaseOutlined, FileAddOutlined, LineChartOutlined, TeamOutlined,
  SettingOutlined, UserOutlined, QuestionCircleOutlined,
  AppstoreOutlined, BarChartOutlined, ExperimentOutlined, SafetyOutlined,
  CloudOutlined, ThunderboltOutlined, EnvironmentOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;
const { Header, Sider, Content } = Layout;

const MaterialFilter = () => {
  const [activeScene, setActiveScene] = useState('water');
  const [activeModule, setActiveModule] = useState('collect');

  const SCENES = [
    { key: 'water', label: '水处理', icon: <EnvironmentOutlined />, color: '#1890ff' },
    { key: 'h2o2', label: '产过氧化氢', icon: <ExperimentOutlined />, color: '#faad14' },
    { key: 'h2', label: '光催化产氢', icon: <ThunderboltOutlined />, color: '#52c41a' },
    { key: 'co2', label: 'CO₂转化', icon: <CloudOutlined />, color: '#722ed1' },
    { key: 'n2', label: '氮还原', icon: <SafetyOutlined />, color: '#f5222d' }
  ];

  const moduleItems = [
    { key: 'collect', label: '数据搜集', icon: <DatabaseOutlined /> },
    { key: 'filter', label: '材料筛选', icon: <FilterOutlined /> },
    { key: 'heterojunction', label: '异质结设计', icon: <AppstoreOutlined /> },
    { key: 'analysis', label: '深度分析', icon: <BarChartOutlined /> },
    { key: 'collaboration', label: '协作空间', icon: <TeamOutlined /> }
  ];

  const handleSceneChange = (sceneKey) => {
    setActiveScene(sceneKey);
    message.success(`已切换到${SCENES.find(s => s.key === sceneKey).label}场景`);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      {/* 顶部导航栏 */}
      <Header style={{ 
        background: '#fff', 
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Title level={4} style={{ margin: 0, marginRight: 32 }}>
            <FilterOutlined /> 材料智能筛选系统
          </Title>
          
          <Space size="small">
            {SCENES.map(scene => (
              <Button
                key={scene.key}
                type={activeScene === scene.key ? 'primary' : 'default'}
                icon={scene.icon}
                style={{ 
                  background: activeScene === scene.key ? scene.color : '#fff',
                  borderColor: scene.color,
                  color: activeScene === scene.key ? '#fff' : scene.color
                }}
                onClick={() => handleSceneChange(scene.key)}
              >
                {scene.label}
              </Button>
            ))}
          </Space>
        </div>

        <Space size="large">
          <Input.Search 
            placeholder="搜索材料ID/化学式/晶体结构" 
            style={{ width: 300 }}
            onSearch={value => console.log('搜索:', value)}
          />
          <Tooltip title="系统设置">
            <Button icon={<SettingOutlined />} shape="circle" />
          </Tooltip>
          <Tooltip title="用户中心">
            <Button icon={<UserOutlined />} shape="circle" />
          </Tooltip>
          <Tooltip title="帮助">
            <Button icon={<QuestionCircleOutlined />} shape="circle" />
          </Tooltip>
        </Space>
      </Header>

      <Layout>
        {/* 左侧功能面板 */}
        <Sider 
          width={220} 
          style={{ 
            background: '#fff',
            margin: '16px 0 16px 16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={[activeModule]}
            style={{ borderRight: 0, padding: '16px 0' }}
            onSelect={({ key }) => setActiveModule(key)}
          >
            {moduleItems.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>

          <Divider style={{ margin: '16px 0' }} />

          <div style={{ padding: '0 24px' }}>
            <Title level={5}>模板库</Title>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button type="link" icon={<FileAddOutlined />}>保存当前模板</Button>
              <Button type="link" icon={<DownloadOutlined />}>导入模板</Button>
              <Button type="link" icon={<UploadOutlined />}>导出模板</Button>
            </Space>
          </div>
        </Sider>

        {/* 主内容区 */}
        <Content style={{ margin: '16px', padding: 0 }}>
          <div style={{ 
            background: '#fff', 
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '24px',
            minHeight: 'calc(100vh - 120px)'
          }}>
            {activeModule === 'collect' ? (
              <div>
                <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
                  <Col>
                    <Title level={4} style={{ margin: 0 }}>
                      <DatabaseOutlined /> 材料数据搜集
                    </Title>
                  </Col>
                  <Col>
                    <Space>
                      <Button icon={<DownloadOutlined />}>批量导入</Button>
                      <Button type="primary" icon={<FileAddOutlined />}>新建搜集任务</Button>
                    </Space>
                  </Col>
                </Row>

                <Card title="数据源配置" style={{ marginBottom: 24 }}>
                  <Row gutter={[24, 24]}>
                    <Col span={8}>
                      <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                        <div style={{ fontSize: 48, color: '#1890ff', marginBottom: 16 }}>
                          <DatabaseOutlined />
                        </div>
                        <Title level={5}>Materials Project</Title>
                        <Text type="secondary">包含13万+无机晶体材料数据</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="blue">带隙</Tag>
                          <Tag color="blue">形成能</Tag>
                          <Tag color="blue">晶体结构</Tag>
                        </div>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                        <div style={{ fontSize: 48, color: '#52c41a', marginBottom: 16 }}>
                          <DatabaseOutlined />
                        </div>
                        <Title level={5}>OQMD</Title>
                        <Text type="secondary">包含70万+材料计算数据</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="green">稳定性</Tag>
                          <Tag color="green">电子结构</Tag>
                          <Tag color="green">热力学</Tag>
                        </div>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                        <div style={{ fontSize: 48, color: '#722ed1', marginBottom: 16 }}>
                          <DatabaseOutlined />
                        </div>
                        <Title level={5}>AFLOW</Title>
                        <Text type="secondary">包含300万+材料性质数据</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="purple">机械性能</Tag>
                          <Tag color="purple">光学性质</Tag>
                          <Tag color="purple">磁学性质</Tag>
                        </div>
                      </Card>
                    </Col>
                  </Row>

                  <Divider />

                  <Form layout="vertical">
                    <Row gutter={24}>
                      <Col span={12}>
                        <Form.Item label="搜集范围">
                          <Select mode="multiple" placeholder="选择材料类别">
                            <Option value="oxide">氧化物</Option>
                            <Option value="sulfide">硫化物</Option>
                            <Option value="nitride">氮化物</Option>
                            <Option value="perovskite">钙钛矿</Option>
                            <Option value="2d">二维材料</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="数据字段">
                          <Checkbox.Group style={{ width: '100%' }}>
                            <Row>
                              <Col span={8}><Checkbox value="band_gap">带隙</Checkbox></Col>
                              <Col span={8}><Checkbox value="formation_energy">形成能</Checkbox></Col>
                              <Col span={8}><Checkbox value="structure">晶体结构</Checkbox></Col>
                              <Col span={8}><Checkbox value="stability">稳定性</Checkbox></Col>
                              <Col span={8}><Checkbox value="density">密度</Checkbox></Col>
                              <Col span={8}><Checkbox value="magnetism">磁性</Checkbox></Col>
                            </Row>
                          </Checkbox.Group>
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={24}>
                      <Col span={8}>
                        <Form.Item label="带隙范围 (eV)">
                          <Slider 
                            range 
                            min={0} 
                            max={6} 
                            step={0.1}
                            defaultValue={[1.0, 4.0]}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="形成能上限 (eV/atom)">
                          <Input placeholder="如：0.3" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="最大搜集数量">
                          <Input placeholder="如：10000" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item>
                      <Space>
                        <Button type="primary" icon={<SearchOutlined />}>
                          开始搜集
                        </Button>
                        <Button icon={<DownloadOutlined />}>
                          导出配置
                        </Button>
                        <Button>
                          重置条件
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                </Card>

                <Card title="搜集任务列表">
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ background: '#fafafa' }}>
                          <th style={{ padding: '12px', textAlign: 'left' }}>任务ID</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>数据源</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>搜集范围</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>数据量</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>状态</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>创建时间</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: 'T001', source: 'Materials Project', scope: '氧化物/硫化物', count: '12,456', status: 'completed', time: '2024-01-15' },
                          { id: 'T002', source: 'OQMD', scope: '钙钛矿材料', count: '8,932', status: 'processing', time: '2024-01-16' },
                          { id: 'T003', source: 'AFLOW', scope: '二维材料', count: '5,678', status: 'pending', time: '2024-01-17' },
                        ].map(task => (
                          <tr key={task.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                            <td style={{ padding: '12px' }}>{task.id}</td>
                            <td style={{ padding: '12px' }}>{task.source}</td>
                            <td style={{ padding: '12px' }}>{task.scope}</td>
                            <td style={{ padding: '12px' }}>{task.count}</td>
                            <td style={{ padding: '12px' }}>
                              {task.status === 'completed' && <Tag color="green">已完成</Tag>}
                              {task.status === 'processing' && <Tag color="blue">进行中</Tag>}
                              {task.status === 'pending' && <Tag color="orange">等待中</Tag>}
                            </td>
                            <td style={{ padding: '12px' }}>{task.time}</td>
                            <td style={{ padding: '12px' }}>
                              <Space>
                                <Button size="small">查看详情</Button>
                                {task.status === 'completed' && (
                                  <Button size="small" type="primary">导入筛选</Button>
                                )}
                              </Space>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            ) : activeModule === 'filter' ? (
              <div>
                <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
                  <Col>
                    <Title level={4} style={{ margin: 0 }}>
                      <FilterOutlined /> 多级材料筛选
                    </Title>
                  </Col>
                  <Col>
                    <Space>
                      <Button icon={<DownloadOutlined />}>导出筛选结果</Button>
                      <Button type="primary" icon={<LineChartOutlined />}>开始筛选</Button>
                    </Space>
                  </Col>
                </Row>

                <Card title="筛选漏斗" style={{ marginBottom: 24 }}>
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                      {[
                        { label: '初始材料库', count: '12,456', color: '#1890ff' },
                        { label: '一级筛选', count: '3,842', color: '#52c41a' },
                        { label: '二级筛选', count: '1,256', color: '#faad14' },
                        { label: '三级筛选', count: '324', color: '#f5222d' },
                        { label: '优质材料', count: '48', color: '#722ed1' },
                      ].map((stage, index) => (
                        <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
                          <div style={{ 
                            width: '80px', 
                            height: '80px', 
                            borderRadius: '50%',
                            background: stage.color,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            marginBottom: 8
                          }}>
                            <Title level={5} style={{ margin: 0, color: '#fff' }}>{stage.count}</Title>
                          </div>
                          <Text>{stage.label}</Text>
                        </div>
                      ))}
                    </div>
                    <Text type="secondary">筛选漏斗展示了从12,456个材料中逐步筛选出48个优质材料的过程</Text>
                  </div>
                </Card>

                <Card title="筛选条件" style={{ marginBottom: 24 }}>
                  <Form layout="vertical">
                    <Row gutter={24}>
                      <Col span={8}>
                        <Form.Item label="带隙范围 (eV)">
                          <Slider 
                            range 
                            min={0} 
                            max={6} 
                            step={0.1}
                            defaultValue={[1.2, 3.5]}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="形成能 (eV/atom)">
                          <Input placeholder="≤ 0.3" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="热力学稳定性">
                          <Select defaultValue="stable">
                            <Option value="stable">稳定</Option>
                            <Option value="metastable">亚稳定</Option>
                            <Option value="all">全部</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={24}>
                      <Col span={12}>
                        <Form.Item label="元素组成">
                          <Select mode="multiple" placeholder="选择元素">
                            <Option value="Ti">Ti (钛)</Option>
                            <Option value="O">O (氧)</Option>
                            <Option value="C">C (碳)</Option>
                            <Option value="N">N (氮)</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="晶体结构">
                          <Select mode="multiple" placeholder="选择结构">
                            <Option value="perovskite">钙钛矿</Option>
                            <Option value="spinel">尖晶石</Option>
                            <Option value="layered">层状</Option>
                            <Option value="zincblende">闪锌矿</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item>
                      <Space>
                        <Button type="primary" icon={<FilterOutlined />}>
                          应用筛选条件
                        </Button>
                        <Button icon={<DownloadOutlined />}>
                          保存筛选模板
                        </Button>
                        <Button>
                          重置条件
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                </Card>

                <Card title="筛选结果预览">
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ background: '#fafafa' }}>
                          <th style={{ padding: '12px', textAlign: 'left' }}>材料ID</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>化学式</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>带隙(eV)</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>形成能</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>综合评分</th>
                          <th style={{ padding: '12px', textAlign: 'left' }}>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: 'mp-1234', formula: 'TiO₂', bandgap: 3.2, formation: -2.1, score: 92 },
                          { id: 'mp-5678', formula: 'Fe₂O₃', bandgap: 2.1, formation: -1.8, score: 85 },
                          { id: 'mp-9012', formula: 'WO₃', bandgap: 2.8, formation: -2.3, score: 95 },
                          { id: 'mp-3456', formula: 'BiVO₄', bandgap: 2.4, formation: -1.9, score: 88 },
                          { id: 'mp-7890', formula: 'ZnO', bandgap: 3.3, formation: -2.0, score: 82 },
                        ].map((material, index) => (
                          <tr key={material.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                            <td style={{ padding: '12px' }}>{material.id}</td>
                            <td style={{ padding: '12px' }}>{material.formula}</td>
                            <td style={{ padding: '12px' }}>{material.bandgap}</td>
                            <td style={{ padding: '12px' }}>{material.formation}</td>
                            <td style={{ padding: '12px' }}>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ 
                                  width: '60px', 
                                  height: '8px', 
                                  background: '#f0f0f0',
                                  borderRadius: '4px',
                                  marginRight: '8px',
                                  overflow: 'hidden'
                                }}>
                                  <div style={{ 
                                    width: `${material.score}%`, 
                                    height: '100%', 
                                    background: material.score >= 90 ? '#52c41a' : material.score >= 80 ? '#faad14' : '#f5222d'
                                  }} />
                                </div>
                                <span>{material.score}</span>
                              </div>
                            </td>
                            <td style={{ padding: '12px' }}>
                              <Space>
                                <Button size="small">详情</Button>
                                <Button size="small" type="primary">加入对比</Button>
                              </Space>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <Divider />
                  
                  <Row justify="space-between" align="middle">
                    <Col>
                      <Text>共筛选出 <Text strong>48</Text> 个优质材料</Text>
                    </Col>
                    <Col>
                      <Space>
                        <Button>上一页</Button>
                        <Button type="primary">1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>下一页</Button>
                      </Space>
                    </Col>
                  </Row>
                </Card>
              </div>
            ) : activeModule === 'heterojunction' ? (
              <div>
                <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
                  <Col>
                    <Title level={4} style={{ margin: 0 }}>
                      <AppstoreOutlined /> 异质结设计
                    </Title>
                  </Col>
                  <Col>
                    <Space>
                      <Button icon={<DownloadOutlined />}>导出设计方案</Button>
                      <Button type="primary" icon={<FileAddOutlined />}>新建设计</Button>
                    </Space>
                  </Col>
                </Row>

                <Card title="异质结类型选择" style={{ marginBottom: 24 }}>
                  <Row gutter={[24, 24]}>
                    <Col span={8}>
                      <Card 
                        hoverable 
                        style={{ 
                          textAlign: 'center', 
                          height: '100%',
                          border: '2px solid #1890ff'
                        }}
                      >
                        <div style={{ fontSize: 48, color: '#1890ff', marginBottom: 16 }}>
                          <AppstoreOutlined />
                        </div>
                        <Title level={5}>Type-I 异质结</Title>
                        <Text type="secondary">能带对齐：交错型</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="blue">电子-空穴复合</Tag>
                          <Tag color="blue">光催化</Tag>
                        </div>
                        <div style={{ marginTop: 16 }}>
                          <Button type="primary">选择此类型</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card 
                        hoverable 
                        style={{ 
                          textAlign: 'center', 
                          height: '100%',
                          border: '2px solid #52c41a'
                        }}
                      >
                        <div style={{ fontSize: 48, color: '#52c41a', marginBottom: 16 }}>
                          <AppstoreOutlined />
                        </div>
                        <Title level={5}>Type-II 异质结</Title>
                        <Text type="secondary">能带对齐：交错型</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="green">电荷分离</Tag>
                          <Tag color="green">光电转换</Tag>
                        </div>
                        <div style={{ marginTop: 16 }}>
                          <Button type="primary">选择此类型</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card 
                        hoverable 
                        style={{ 
                          textAlign: 'center', 
                          height: '100%',
                          border: '2px solid #722ed1'
                        }}
                      >
                        <div style={{ fontSize: 48, color: '#722ed1', marginBottom: 16 }}>
                          <AppstoreOutlined />
                        </div>
                        <Title level={5}>Z型异质结</Title>
                        <Text type="secondary">能带对齐：Z字型</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="purple">强氧化还原</Tag>
                          <Tag color="purple">全分解水</Tag>
                        </div>
                        <div style={{ marginTop: 16 }}>
                          <Button type="primary">选择此类型</Button>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Card>

                <Card title="材料配对" style={{ marginBottom: 24 }}>
                  <Row gutter={[24, 24]}>
                    <Col span={12}>
                      <Card title="半导体A" style={{ height: '100%' }}>
                        <Form layout="vertical">
                          <Form.Item label="选择材料">
                            <Select placeholder="搜索或选择材料">
                              <Option value="tio2">TiO₂ (二氧化钛)</Option>
                              <Option value="fe2o3">Fe₂O₃ (氧化铁)</Option>
                              <Option value="wo3">WO₃ (氧化钨)</Option>
                              <Option value="bivo4">BiVO₄ (钒酸铋)</Option>
                              <Option value="zno">ZnO (氧化锌)</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="带隙 (eV)">
                            <Input placeholder="如：3.2" />
                          </Form.Item>
                          <Form.Item label="导带位置 (eV vs NHE)">
                            <Input placeholder="如：-0.8" />
                          </Form.Item>
                          <Form.Item label="价带位置 (eV vs NHE)">
                            <Input placeholder="如：2.4" />
                          </Form.Item>
                        </Form>
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card title="半导体B" style={{ height: '100%' }}>
                        <Form layout="vertical">
                          <Form.Item label="选择材料">
                            <Select placeholder="搜索或选择材料">
                              <Option value="cds">CdS (硫化镉)</Option>
                              <Option value="g-c3n4">g-C₃N₄ (石墨相氮化碳)</Option>
                              <Option value="moo3">MoO₃ (氧化钼)</Option>
                              <Option value="cu2o">Cu₂O (氧化亚铜)</Option>
                              <Option value="sno2">SnO₂ (二氧化锡)</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="带隙 (eV)">
                            <Input placeholder="如：2.4" />
                          </Form.Item>
                          <Form.Item label="导带位置 (eV vs NHE)">
                            <Input placeholder="如：-1.0" />
                          </Form.Item>
                          <Form.Item label="价带位置 (eV vs NHE)">
                            <Input placeholder="如：1.4" />
                          </Form.Item>
                        </Form>
                      </Card>
                    </Col>
                  </Row>

                  <Divider />

                  <div style={{ textAlign: 'center' }}>
                    <Title level={5}>能带结构示意图</Title>
                    <div style={{ 
                      height: '200px', 
                      background: 'linear-gradient(90deg, #1890ff, #52c41a)',
                      borderRadius: '8px',
                      margin: '20px 0',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <Text strong style={{ color: '#fff' }}>TiO₂/g-C₃N₄ Type-II 异质结</Text>
                        <div style={{ marginTop: '10px' }}>
                          <Text style={{ color: '#fff' }}>电荷分离效率：85% | 光电流密度：2.3 mA/cm²</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card title="界面优化">
                  <Form layout="vertical">
                    <Row gutter={24}>
                      <Col span={8}>
                        <Form.Item label="界面接触类型">
                          <Select defaultValue="face-to-face">
                            <Option value="face-to-face">面对面接触</Option>
                            <Option value="edge-to-edge">边对边接触</Option>
                            <Option value="point-to-point">点对点接触</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="界面面积比例">
                          <Slider 
                            min={10} 
                            max={100} 
                            step={5}
                            defaultValue={50}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="界面缺陷密度">
                          <Input placeholder="如：10¹² cm⁻²" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={24}>
                      <Col span={12}>
                        <Form.Item label="界面修饰层">
                          <Select mode="multiple" placeholder="选择修饰材料">
                            <Option value="graphene">石墨烯</Option>
                            <Option value="carbon-dot">碳点</Option>
                            <Option value="au-np">金纳米颗粒</Option>
                            <Option value="ag-np">银纳米颗粒</Option>
                            <Option value="pt-np">铂纳米颗粒</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="界面电荷传输势垒">
                          <Input placeholder="如：0.3 eV" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item>
                      <Space>
                        <Button type="primary" icon={<AppstoreOutlined />}>
                          生成异质结模型
                        </Button>
                        <Button icon={<DownloadOutlined />}>
                          导出结构文件
                        </Button>
                        <Button>
                          重置设计
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                </Card>
              </div>
            ) : activeModule === 'analysis' ? (
              <div>
                <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
                  <Col>
                    <Title level={4} style={{ margin: 0 }}>
                      <BarChartOutlined /> 深度分析
                    </Title>
                  </Col>
                  <Col>
                    <Space>
                      <Button icon={<DownloadOutlined />}>导出分析报告</Button>
                      <Button type="primary" icon={<LineChartOutlined />}>开始分析</Button>
                    </Space>
                  </Col>
                </Row>

                <Card title="分析类型选择" style={{ marginBottom: 24 }}>
                  <Row gutter={[24, 24]}>
                    <Col span={6}>
                      <Card 
                        hoverable 
                        style={{ 
                          textAlign: 'center', 
                          height: '100%',
                          border: '2px solid #1890ff'
                        }}
                      >
                        <div style={{ fontSize: 48, color: '#1890ff', marginBottom: 16 }}>
                          <BarChartOutlined />
                        </div>
                        <Title level={5}>性能预测</Title>
                        <Text type="secondary">基于机器学习模型</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="blue">光催化活性</Tag>
                          <Tag color="blue">稳定性</Tag>
                        </div>
                        <div style={{ marginTop: 16 }}>
                          <Button type="primary">选择</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card 
                        hoverable 
                        style={{ 
                          textAlign: 'center', 
                          height: '100%',
                          border: '2px solid #52c41a'
                        }}
                      >
                        <div style={{ fontSize: 48, color: '#52c41a', marginBottom: 16 }}>
                          <BarChartOutlined />
                        </div>
                        <Title level={5}>结构分析</Title>
                        <Text type="secondary">晶体结构分析</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="green">对称性</Tag>
                          <Tag color="green">键长键角</Tag>
                        </div>
                        <div style={{ marginTop: 16 }}>
                          <Button type="primary">选择</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card 
                        hoverable 
                        style={{ 
                          textAlign: 'center', 
                          height: '100%',
                          border: '2px solid #faad14'
                        }}
                      >
                        <div style={{ fontSize: 48, color: '#faad14', marginBottom: 16 }}>
                          <BarChartOutlined />
                        </div>
                        <Title level={5}>电子结构</Title>
                        <Text type="secondary">能带结构分析</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="orange">态密度</Tag>
                          <Tag color="orange">电荷分布</Tag>
                        </div>
                        <div style={{ marginTop: 16 }}>
                          <Button type="primary">选择</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card 
                        hoverable 
                        style={{ 
                          textAlign: 'center', 
                          height: '100%',
                          border: '2px solid #722ed1'
                        }}
                      >
                        <div style={{ fontSize: 48, color: '#722ed1', marginBottom: 16 }}>
                          <BarChartOutlined />
                        </div>
                        <Title level={5}>热力学分析</Title>
                        <Text type="secondary">热力学性质计算</Text>
                        <div style={{ marginTop: 16 }}>
                          <Tag color="purple">形成能</Tag>
                          <Tag color="purple">相稳定性</Tag>
                        </div>
                        <div style={{ marginTop: 16 }}>
                          <Button type="primary">选择</Button>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Card>

                <Card title="分析参数配置" style={{ marginBottom: 24 }}>
                  <Form layout="vertical">
                    <Row gutter={24}>
                      <Col span={8}>
                        <Form.Item label="分析算法">
                          <Select defaultValue="random-forest">
                            <Option value="random-forest">随机森林</Option>
                            <Option value="xgboost">XGBoost</Option>
                            <Option value="neural-network">神经网络</Option>
                            <Option value="svm">支持向量机</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="训练集比例">
                          <Slider 
                            min={50} 
                            max={90} 
                            step={5}
                            defaultValue={80}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="交叉验证折数">
                          <Select defaultValue="5">
                            <Option value="3">3折</Option>
                            <Option value="5">5折</Option>
                            <Option value="10">10折</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={24}>
                      <Col span={12}>
                        <Form.Item label="特征选择">
                          <Checkbox.Group style={{ width: '100%' }}>
                            <Row>
                              <Col span={6}><Checkbox value="bandgap">带隙</Checkbox></Col>
                              <Col span={6}><Checkbox value="formation">形成能</Checkbox></Col>
                              <Col span={6}><Checkbox value="density">密度</Checkbox></Col>
                              <Col span={6}><Checkbox value="volume">体积</Checkbox></Col>
                              <Col span={6}><Checkbox value="electronegativity">电负性</Checkbox></Col>
                              <Col span={6}><Checkbox value="atomic-radius">原子半径</Checkbox></Col>
                              <Col span={6}><Checkbox value="valence">价电子数</Checkbox></Col>
                              <Col span={6}><Checkbox value="coordination">配位数</Checkbox></Col>
                            </Row>
                          </Checkbox.Group>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="目标变量">
                          <Select mode="multiple" placeholder="选择预测目标">
                            <Option value="photocatalytic-activity">光催化活性</Option>
                            <Option value="stability">稳定性</Option>
                            <Option value="conductivity">电导率</Option>
                            <Option value="optical-absorption">光吸收</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>

                <Card title="分析结果可视化">
                  <Row gutter={[24, 24]}>
                    <Col span={12}>
                      <Card title="特征重要性排序" style={{ height: '100%' }}>
                        <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ textAlign: 'center' }}>
                            <Title level={5}>特征重要性分析</Title>
                            <div style={{ marginTop: 20 }}>
                              {[
                                { name: '带隙', importance: 85, color: '#1890ff' },
                                { name: '形成能', importance: 72, color: '#52c41a' },
                                { name: '电负性', importance: 65, color: '#faad14' },
                                { name: '原子半径', importance: 58, color: '#722ed1' },
                                { name: '配位数', importance: 45, color: '#f5222d' },
                              ].map((feature, index) => (
                                <div key={index} style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
                                  <div style={{ width: '100px', textAlign: 'right', marginRight: 10 }}>
                                    <Text>{feature.name}</Text>
                                  </div>
                                  <div style={{ 
                                    width: '200px', 
                                    height: '20px', 
                                    background: '#f0f0f0',
                                    borderRadius: '4px',
                                    overflow: 'hidden'
                                  }}>
                                    <div style={{ 
                                      width: `${feature.importance}%`, 
                                      height: '100%', 
                                      background: feature.color
                                    }} />
                                  </div>
                                  <div style={{ width: '40px', textAlign: 'right', marginLeft: 10 }}>
                                    <Text strong>{feature.importance}%</Text>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card title="预测性能评估" style={{ height: '100%' }}>
                        <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ textAlign: 'center' }}>
                            <Title level={5}>模型性能指标</Title>
                            <div style={{ marginTop: 20 }}>
                              <Row gutter={[16, 16]}>
                                <Col span={12}>
                                  <Card size="small" style={{ background: '#f6ffed', borderColor: '#b7eb8f' }}>
                                    <Title level={3} style={{ margin: 0, color: '#52c41a' }}>0.92</Title>
                                    <Text type="secondary">R²得分</Text>
                                  </Card>
                                </Col>
                                <Col span={12}>
                                  <Card size="small" style={{ background: '#fff7e6', borderColor: '#ffd591' }}>
                                    <Title level={3} style={{ margin: 0, color: '#faad14' }}>0.15</Title>
                                    <Text type="secondary">MAE</Text>
                                  </Card>
                                </Col>
                                <Col span={12}>
                                  <Card size="small" style={{ background: '#e6f7ff', borderColor: '#91d5ff' }}>
                                    <Title level={3} style={{ margin: 0, color: '#1890ff' }}>0.21</Title>
                                    <Text type="secondary">RMSE</Text>
                                  </Card>
                                </Col>
                                <Col span={12}>
                                  <Card size="small" style={{ background: '#f9f0ff', borderColor: '#d3adf7' }}>
                                    <Title level={3} style={{ margin: 0, color: '#722ed1' }}>0.88</Title>
                                    <Text type="secondary">准确率</Text>
                                  </Card>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>

                  <Divider />

                  <Form.Item>
                    <Space>
                      <Button type="primary" icon={<BarChartOutlined />}>
                        生成分析报告
                      </Button>
                      <Button icon={<DownloadOutlined />}>
                        导出分析数据
                      </Button>
                      <Button>
                        重新分析
                      </Button>
                    </Space>
                  </Form.Item>
                </Card>
              </div>
            ) : (
              <div>
                <Row justify="center" align="middle" style={{ height: '400px' }}>
                  <Col style={{ textAlign: 'center' }}>
                    <Title level={3}>
                      <TeamOutlined /> 协作空间
                    </Title>
                    <Text type="secondary">
                      团队协作与数据共享模块开发中...
                    </Text>
                    <div style={{ marginTop: 20 }}>
                      <Button type="primary" onClick={() => setActiveModule('collect')}>
                        返回数据搜集模块
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MaterialFilter;
