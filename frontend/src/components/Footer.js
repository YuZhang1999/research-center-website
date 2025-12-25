import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const links = [
    // 学术机构
    { name: '云南大学', url: 'https://www.ynu.edu.cn/' },
    { name: '云南大学材料与能源学院', url: 'http://www.mse.ynu.edu.cn/' },
    { name: '中科院大连化学物理所', url: 'https://www.dicp.ac.cn/' },
    { name: '中科院理化技术所', url: 'http://www.ipc.cas.cn/' },
    { name: '中科院宁波材料所', url: 'https://www.nimte.ac.cn/' },
    // 学术组织
    { name: '中国环境科学学会', url: 'https://www.chinacses.org/' },
    { name: '中国化学会', url: 'http://www1.chemsoc.org.cn/' },
    { name: '中国化工学会', url: 'https://www.ciesc.cn/' },
    { name: '中国催化学会', url: 'https://catalysis.org.cn/' },
    { name: '云南大学地球科学学院', url: 'http://www.srees.ynu.edu.cn/' },
    { name: '昆明理工大学环境科学与工程学院', url: 'https://ese.kmust.edu.cn/' },
    { name: '云南省生态环境科学研究院', url: 'http://www.yraes.org.cn/' },
    { name: '中国矿业大学（北京）化学与环境工程学院', url: 'https://scee.cumtb.edu.cn/' },
    // 政府部门
    { name: '国家自然科学基金委员会', url: 'https://www.nsfc.gov.cn/' },
    { name: '中华人民共和国科技部', url: 'https://www.most.gov.cn/' },
    { name: '中华人民共和国生态环境部', url: 'https://www.mee.gov.cn/' },
    { name: '云南省科技厅', url: 'https://kjt.yn.gov.cn/' },
    { name: '云南省生态环境厅', url: 'https://sthjt.yn.gov.cn/' },
  ];

  return (
    <AntFooter style={{ background: '#001529', color: '#fff', padding: '40px 50px' }}>
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>联系我们</h3>
          <p><EnvironmentOutlined /> 地址：云南省昆明市云南大学材料与能源学院</p>
          <p><PhoneOutlined /> 电话：</p>
          <p><MailOutlined /> 邮箱：jqwang@ynu.edu.cn</p>
          <p><GlobalOutlined /> 网站：www.wastewater-research.ynu.edu.cn</p>
          
          <Divider style={{ background: '#434343', margin: '20px 0' }} />
          
          <h4 style={{ color: '#fff', marginBottom: '15px' }}>留言板</h4>
          <div style={{ 
            background: '#0c2135', 
            borderRadius: '8px', 
            padding: '15px',
            border: '1px solid #434343'
          }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <input 
                type="text" 
                placeholder="请输入留言..." 
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  background: '#0c2135',
                  border: '1px solid #434343',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '13px'
                }}
              />
              <button 
                style={{
                  padding: '8px 16px',
                  background: '#1890ff',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                提交
              </button>
            </div>
            <p style={{ color: '#8c8c8c', fontSize: '12px', marginTop: '5px', marginBottom: 0 }}>
              留言内容保密，仅管理员可见
            </p>
          </div>
        </Col>
        
        <Col span={8}>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>相关链接</h3>
          <Row gutter={[8, 8]}>
            {links.map((link, index) => (
              <Col span={12} key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#8c8c8c', fontSize: '13px' }}>{link.name}</a>
              </Col>
            ))}
          </Row>
        </Col>
        
        <Col span={8}>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>关于我们</h3>
          <p style={{ color: '#8c8c8c', lineHeight: '1.6' }}>
            本研究中心致力于工业废水处理技术的研究与开发，
            聚焦光催化技术在环境治理中的应用，推动科研成果的工程化和产业化。
          </p>
          <Divider style={{ background: '#434343', margin: '20px 0' }} />
          <h4 style={{ color: '#fff', marginBottom: '15px' }}>关注我们</h4>
          <Row gutter={[16, 16]} justify="start">
            <Col>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #07c160 0%, #05a050 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '5px'
                }}>
                  微信
                </div>
                <div style={{ fontSize: '12px', color: '#8c8c8c' }}>微信公众号</div>
              </div>
            </Col>
            <Col>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #fb7299 0%, #e65c8b 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '5px'
                }}>
                  B站
                </div>
                <div style={{ fontSize: '12px', color: '#8c8c8c' }}>哔哩哔哩</div>
              </div>
            </Col>
            <Col>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #000 0%, #333 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '5px'
                }}>
                  抖音
                </div>
                <div style={{ fontSize: '12px', color: '#8c8c8c' }}>抖音官方号</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      
      <Divider style={{ background: '#434343', margin: '30px 0' }} />
      
      <Row justify="space-between" align="middle">
        <Col>
          <p style={{ color: '#8c8c8c', margin: 0 }}>
            © 2025 本研究中心. 保留所有权利.
          </p>
        </Col>
        <Col>
          <p style={{ color: '#8c8c8c', margin: 0 }}>
            滇ICP备12345678号 | 公安备案号：530100123456
          </p>
        </Col>
      </Row>
    </AntFooter>
  );
};

export default Footer;
