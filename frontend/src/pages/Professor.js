import React from 'react';
import { Card, Row, Col, List, Divider, Timeline, Tag, Table } from 'antd';
import { 
  BookOutlined, TrophyOutlined, TeamOutlined, 
  MailOutlined, PhoneOutlined, EnvironmentOutlined, 
  ExperimentOutlined, PaperClipOutlined, ProjectOutlined 
} from '@ant-design/icons';

const Professor = () => {
  // 基本信息 - 王家强教授真实信息
  const education = [
    { year: '1982.9-1986.7', content: '云南大学化学系本科（学士）' },
    { year: '1986.9-1989.7', content: '云南大学化学系（硕士）' },
    { year: '1996.10-1999.9', content: '英国利兹大学攻读博士学位（2000年1月获博士学位）' },
  ];

  const experience = [
    { year: '1989.8-1995.5', content: '云南大学化学系（助教、讲师，1990-1991年到畹町市虫胶厂锻炼）' },
    { year: '1995.5-1996.9', content: '在泰国青迈大学参加德国政府资助并与泰国合办的环境危险评估国际项目学习' },
    { year: '1999.9-2002.11', content: '先后在美国西北大学和堪萨斯州立大学化学系做博士后研究' },
    { year: '2002.12-至今', content: '云南大学材料与能源学院，教授、博士生导师' },
  ];

  const achievements = [
    '云岭学者',
    '云南省中青年学术和技术带头人',
    '省委联系专家',
    '云南省自然科学奖一等奖',
    '国家光电子能源材料国际联合研究中心主任',
    '云南省工业废水光催化处理工程技术研究中心主任',
    '云南绿色褐煤能源化学协同创新中心主任',
    '云南省高校特殊污染物光催化处理工程研究中心主任',
    '昆明市污水处理新材料重点实验室主任',
  ];

  // 研究方向详情 - 王家强教授真实研究方向
  const researchDirections = [
    {
      title: '生物模板光催化技术',
      description: '利用生物模板制备高效光催化剂及成套设备',
      keywords: ['生物模板', '光催化材料', '成套设备', '产业化应用', '水处理'],
      color: 'blue'
    },
    {
      title: '工业废水处理新材料',
      description: '开发用于污水处理的新型功能材料',
      keywords: ['除磷材料', '重金属去除', '脱氟材料', '介孔材料', 'MOFs材料'],
      color: 'green'
    },
    {
      title: '精细化学品合成',
      description: '环境友好的精细化学品合成方法',
      keywords: ['2,5-二羟基对苯二甲酸', '4-羟甲基苯甲酸', '绿色合成', '催化氧化', '对二甲苯'],
      color: 'orange'
    },
    {
      title: '环境催化与纳米材料',
      description: '纳米材料在环境治理中的应用',
      keywords: ['纳米催化剂', '单原子催化', '石墨烯材料', '量子点', '仿生材料'],
      color: 'purple'
    },
  ];

  // 代表性论文 - 王家强教授真实论文
  const representativePapers = [
    {
      key: '1',
      title: 'One-pot synthesis of Bi3O(PO4)2(OH) embedded on rod-like BiPO4 for efficient adsorption and visible-light photocatalytic reduction of aqueous Cr(VI)',
      journal: 'Journal of Alloys and Compounds',
      year: '2021',
      impact: '6.2',
      authors: 'Di Na, Liang Jiang*, Mi Li, Tao Lei, Qian Liu, Jiao He, Yongjuan Chen, Wei Wang, Jiaqiang Wang*'
    },
    {
      key: '2',
      title: 'Selective mediation of ovarian cancer SKOV3 cells death by pristine carbon quantum dots/Cu2O composite through targeting matrix metalloproteinases, angiogenic cytokines and cytoskeleton',
      journal: 'Journal of Nanobiotechnology',
      year: '2021',
      impact: '10.2',
      authors: 'Daomei Chen, Bin Li*, Tao Lei, Di Na, Minfang Nie, Yepeng Yang, Congjia, Xie, Zijuan He and Jiaqiang Wang*'
    },
    {
      key: '3',
      title: 'Capillary flow-driven efficient nanomaterials for seawater desalination: Review of classifications, challenges, and future perspectives',
      journal: 'Renewable and Sustainable Energy Reviews',
      year: '2021',
      impact: '16.8',
      authors: 'T. Arunkumar*, Jiaqiang Wang*, D. Denkenberger'
    },
    {
      key: '4',
      title: 'Morphology- and Phase- Controlled Synthesis of Visible-Light-Activated S-doped TiO2 with Tunable S4+/S6+ Ratio',
      journal: 'Chemical Engineering Journal',
      year: '2020',
      impact: '15.1',
      authors: 'Liang Jiang, Zhifang Luo, Yizhou Li, Wei Wang, Jianjun Li, Jing Li, Yali Ao, Jiao He, Virender K.Sharma, JiangqiangWang*'
    },
    {
      key: '5',
      title: 'Facile direct synthesis of graphene-wrapped ZnO nanospheres from cyanobacterial cells',
      journal: 'Chemical Communications',
      year: '2019',
      impact: '4.9',
      authors: 'Jiao He, Liang Jiang, Yongjuan Chen, Zhifang Luo, Zhiying Yan and Jiaqiang Wang*'
    },
  ];

  // 科研项目
  const researchProjects = [
    {
      title: '国家自然科学基金重点项目',
      period: '2023-2027',
      fund: '300万元',
      role: '负责人',
      status: '在研'
    },
    {
      title: '国家重点研发计划课题',
      period: '2022-2025',
      fund: '200万元',
      role: '课题负责人',
      status: '在研'
    },
    {
      title: '云南省科技重大专项',
      period: '2024-2026',
      fund: '150万元',
      role: '首席科学家',
      status: '在研'
    },
    {
      title: '国家自然科学基金面上项目',
      period: '2020-2023',
      fund: '80万元',
      role: '负责人',
      status: '已结题'
    },
  ];

  // 授权专利 - 王家强教授真实专利
  const patents = [
    {
      key: '1',
      title: '双模板法制备二氧化铈用于铅锌冶炼含氟废水处理方法',
      number: 'ZL201410839325.9',
      type: '中国发明专利',
      year: '2014'
    },
    {
      key: '2',
      title: '以叶黄素光敏活性物质为模板制备掺杂铈离子的介孔二氧化钛光催化剂的方法',
      number: 'ZL201611160057.3',
      type: '中国发明专利',
      year: '2016'
    },
    {
      key: '3',
      title: '一种紫外—可见光多级光催化处理油漆废水的工艺',
      number: 'ZL201210585993.4',
      type: '中国发明专利',
      year: '2012'
    },
    {
      key: '4',
      title: '一种生物模板制备的室内光催化降解甲醛的二氧化钛-硅藻泥复合材料方法',
      number: 'ZL201410839055.1',
      type: '中国发明专利',
      year: '2014'
    },
    {
      key: '5',
      title: '一种合成2,5-二羟基対苯二甲酸的方法',
      number: 'ZL201510237122.7',
      type: '中国发明专利',
      year: '2015'
    },
    {
      key: '6',
      title: 'Method for synthesizing 4-(hydroxymethyl)benzoic acid by using p-xylene (PX) as raw material',
      number: 'US patent 10,669,223 B2',
      type: '美国发明专利',
      year: '2020'
    },
    {
      key: '7',
      title: 'Use of metal-organic framework as tumor angiogenesis inhibitor',
      number: 'US patent 15/589,162',
      type: '美国发明专利',
      year: '2020'
    },
    {
      key: '8',
      title: 'Skid mounted device for upper-spreading internal diffusion vertical plug flow photocatalytic wastewater treatment',
      number: 'US patent 16/607,111',
      type: '美国发明专利',
      year: '2021'
    },
  ];

  // 专著 - 王家强教授真实专著
  const monographs = [
    {
      key: '1',
      title: 'Mesoporous Materials Catalysts for Photodegradation of Water Pollutants: From Chemical Templates to Biotemplates',
      book: 'New and Future Developments in Catalysis - Solar Photocatalysis',
      publisher: 'Elsevier B.V.',
      year: '2013',
      authors: 'Meiqing Mao, Jiaqiang Wang, Jiao He, and Zhiying Yan'
    },
    {
      key: '2',
      title: 'Comparative Analysis of Water Quality of Different Types of Feed Water in Solar Energy Based Desalting System',
      book: 'Nanostructured Materials for Next-Generation Energy Storage and Conversion - Photovoltaic and Solar Energy',
      publisher: 'Springer-Verlag GmbH Germany',
      year: '2019',
      authors: 'Arunkumar T, David Denkenberger*, Wang, Jiaqiang*'
    },
  ];

  // 研究领域详细描述
  const researchFieldDetails = [
    '催化（光催化）、精细化学品合成，纳米材料、水处理化学。',
    '主要兴趣为：生物模板制备催化剂及脱氟除磷等污水处理新材料、有机-金属骨架模拟酶、焦化废水、植物提取、油漆、制药等废水处理、蓝藻及污泥脱水、毒品及易制毒化学品绿色销毁等研究。',
    '长期从事太阳能仿生光催化、除磷、除重金属等污水处理、农村饮用水处理及仿生材料的研究。'
  ];

  // 科研与教学情况
  const researchTeachingDetails = [
    '主持（完成）973前期课题、国家自然科学基金和云南省人民政府联合重点基金、云南省重点研发计划、教育部科学技术研究重点、公安部重点研究计划项目（技术负责人）、云南省自然科学基金重点项目等多类研究项目。',
    '讲授本科生课程《材料化学》荣获教育部双语教学示范课程，指导本科生获第十届"挑战杯"全国大学生课外学术科技作品竞赛终审决赛自然科学论文类二等奖；获得第四届云南高校青年学术科技作品竞赛一等奖、云南大学第十四届教学成果奖一等奖；带领研究生获第六届中国创新创业大赛云南赛区二等奖。',
    '获云南省自然科学奖一等奖1次。获批云南省工业废水光催化处理工程技术研究中心（云大第一个省工程技术研究中心）、云南绿色褐煤能源化学协同创新中心、云南省高校特殊污染物光催化处理工程研究中心、昆明市污水处理新材料重点实验室，是云南东陆水环境产业研究院（新型研发机构）院长、云南省水污染光催化治理技术创新团队、云南省高校水污染治理化学科技创新团队带头人。'
  ];

  // 学术兼职和社会职务
  const academicAppointments = [
    '中国化学会物理化学学科委员会委员',
    '中国环境科学学会特邀理事',
    '中国可再生能源学会光化学专业委员会委员',
    '全国材料与器件科学家智库环境材料专家委员会副主任委员',
    '公安部毒品分析及禁毒技术重点实验室学术委员会副主任委员',
    '云南省能源研究会副会长',
    '云南省化工学会环境化学分会副理事长',
    '云南省环境标准化委员会委员',
    '云南省生态环境损害鉴定评估专家委员会委员',
    '昆明市环境污染损害鉴定评估中心鉴定评估专家',
    '昆明市生态环境保护局环境应急专家组成员',
    '云南省水污染光催化治理技术创新团队、云南省高校水污染治理化学科技创新团队负责人',
    '《Scientific Reports》国际编委',
    '《安全与环境学报》、工信部主管的《工业技术创新》、《贵金属》、《云南大学学报自然科学版》编委',
    '50余种化学、环境、材料类国际学术期刊审稿人或仲裁人',
    '自2004年起多次被聘为云南省科学技术奖励专业评审委员会委员、副主任委员、主任委员',
    '国家发明奖环保与水文组网络评审专家',
    '第十六届国际催化大会审稿委员会成员、审稿召集人、环境催化分会主席',
    '作为组委会主席承办2010年全国太阳能光化学与光催化学术会议和2011年第13届全国青年催化学术会议',
    '在第十二届中国科协年会、全国催化学术会议、全国环境催化与环境材料学术会议、全国太阳能光化学与光催化学术会议、全国分子筛学术大会会议等本行业国内会议作邀请报告',
    '国家自然科学基金、科技部国际合作项目、国家青年长江、国家青年拔尖、中国博士后科学基金等评审（会评）专家'
  ];

  // 论文列定义
  const paperColumns = [
    {
      title: '论文标题',
      dataIndex: 'title',
      key: 'title',
      width: '40%',
    },
    {
      title: '期刊',
      dataIndex: 'journal',
      key: 'journal',
      width: '20%',
    },
    {
      title: '年份',
      dataIndex: 'year',
      key: 'year',
      width: '10%',
    },
    {
      title: '影响因子',
      dataIndex: 'impact',
      key: 'impact',
      width: '10%',
    },
  ];

  // 项目列定义
  const projectColumns = [
    {
      title: '项目名称',
      dataIndex: 'title',
      key: 'title',
      width: '40%',
    },
    {
      title: '执行期',
      dataIndex: 'period',
      key: 'period',
      width: '15%',
    },
    {
      title: '经费',
      dataIndex: 'fund',
      key: 'fund',
      width: '15%',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      width: '15%',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: '15%',
      render: (status) => (
        <Tag color={status === '在研' ? 'green' : 'blue'}>{status}</Tag>
      ),
    },
  ];

  // 专利列定义
  const patentColumns = [
    {
      title: '专利名称',
      dataIndex: 'title',
      key: 'title',
      width: '50%',
    },
    {
      title: '专利号',
      dataIndex: 'number',
      key: 'number',
      width: '25%',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      width: '15%',
    },
    {
      title: '年份',
      dataIndex: 'year',
      key: 'year',
      width: '10%',
    },
  ];

  // 专著列定义
  const monographColumns = [
    {
      title: '章节标题',
      dataIndex: 'title',
      key: 'title',
      width: '40%',
    },
    {
      title: '书籍名称',
      dataIndex: 'book',
      key: 'book',
      width: '25%',
    },
    {
      title: '出版社',
      dataIndex: 'publisher',
      key: 'publisher',
      width: '15%',
    },
    {
      title: '年份',
      dataIndex: 'year',
      key: 'year',
      width: '10%',
    },
  ];

  return (
    <div style={{ 
      padding: '0 40px', 
      marginTop: '30px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh'
    }}>
      {/* 页面标题 - 优化布局 */}
      <div style={{ 
        marginBottom: '40px',
        textAlign: 'center',
        padding: '30px 0',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          color: '#1d39c4', 
          fontWeight: '600',
          background: 'linear-gradient(90deg, #1d39c4, #1890ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          教授简介
        </h1>
      </div>

      <Row gutter={[32, 32]}>
        {/* 左侧：个人信息卡片 - 优化布局 */}
        <Col xs={24} md={8}>
          <Card
            cover={
              <div style={{
                height: '420px',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '8px 8px 0 0'
              }}>
                <img 
                  src="http://www.mse.ynu.edu.cn/sites/default/files/inline-images/%E7%8E%8B%E5%AE%B6%E5%BC%BA.jpg" 
                  alt="王家强教授" 
                  style={{
                    width: '90%',
                    height: '90%',
                    objectFit: 'contain',
                    borderRadius: '4px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path fill="%231890ff" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                  }}
                />
              </div>
            }
            style={{ 
              marginBottom: '20px',
              borderRadius: '12px',
              boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            <Card.Meta
              title={<div style={{ 
                fontSize: '28px', 
                textAlign: 'center', 
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#1d39c4'
              }}>王家强 教授</div>}
              description={<div style={{ 
                textAlign: 'center', 
                color: '#1890ff', 
                fontSize: '18px', 
                marginBottom: '20px',
                fontWeight: '500'
              }}>二级教授、博士生导师、云岭学者</div>}
            />
            <Divider />
            <div style={{ padding: '0 15px' }}>
              <p style={{ marginBottom: '12px', fontSize: '15px' }}><MailOutlined style={{ marginRight: '10px', color: '#1890ff' }} /> jqwang@ynu.edu.cn</p>
              <p style={{ marginBottom: '12px', fontSize: '15px' }}><PhoneOutlined style={{ marginRight: '10px', color: '#1890ff' }} /> 0871-65031127</p>
              <p style={{ marginBottom: '12px', fontSize: '15px' }}><EnvironmentOutlined style={{ marginRight: '10px', color: '#1890ff' }} /> 云南大学材料与能源学院</p>
              <Divider />
              <h4 style={{ fontSize: '18px', marginBottom: '15px' }}><TeamOutlined style={{ marginRight: '10px', color: '#1890ff' }} /> 主要职务</h4>
              <p style={{ marginBottom: '8px', fontSize: '14px' }}>• 国家光电子能源材料国际联合研究中心主任</p>
              <p style={{ marginBottom: '8px', fontSize: '14px' }}>• 云南省工业废水光催化处理工程技术研究中心主任</p>
              <p style={{ marginBottom: '8px', fontSize: '14px' }}>• 云南绿色褐煤能源化学协同创新中心主任</p>
              <p style={{ marginBottom: '8px', fontSize: '14px' }}>• 云南省高校特殊污染物光催化处理工程研究中心主任</p>
              <p style={{ marginBottom: '8px', fontSize: '14px' }}>• 昆明市污水处理新材料重点实验室主任</p>
            </div>
          </Card>
        </Col>
        
        {/* 右侧：详细信息 */}
        <Col xs={24} md={16}>
          {/* 个人简介 */}
          <Card 
            title={<span style={{ fontSize: '22px', fontWeight: '600' }}>个人简介</span>} 
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '24px' }}
          >
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              王家强教授，英国利兹大学博士，先后在泰国青迈大学参加德国政府资助的环境危险评估国际项目学习，
              在美国西北大学和堪萨斯州立大学化学系做博士后研究。二级教授，博士生导师，云岭学者、
              云南省中青年学术和技术带头人、省委联系专家。
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              立足云南丰富的生物资源，在国内外较早开展了"生物模板光催化水处理技术及成套设备"的研究及产业化推广应用，
              以第一作者（通讯作者）发表SCI论文100余篇（其中1篇ESI {'<'}1%，6篇引用过100次），
              在Elsevier和Springer出版社撰写英文专著各一章；获云南省自然科学奖一等奖1次。
              以第一发明人获19件发明专利授权（3件美国专利）。
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              实现污水处理厂（1万吨/天）深度除磷产业化、某产业园区再生水处理厂（800吨/天）达标改造；
              建成1200方/天的柴河水体大规模应急快速高效除磷工程；实现气浮工艺副产物—藻渣脱水剂（7000吨/天）产业化生产及销售。
            </p>
          </Card>
          
          {/* 教育背景与工作经历 */}
          <Row gutter={[20, 20]} style={{ marginBottom: '24px' }}>
            <Col xs={24} md={12}>
              <Card 
                title={<><BookOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 教育背景</>}
                style={{ 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: 'none',
                  height: '100%'
                }}
                bodyStyle={{ padding: '20px' }}
              >
                <Timeline 
                  items={education.map(item => ({
                    children: (
                      <div>
                        <div style={{ fontWeight: 'bold', color: '#1890ff', fontSize: '15px' }}>{item.year}</div>
                        <div style={{ marginTop: '5px', fontSize: '14px' }}>{item.content}</div>
                      </div>
                    )
                  }))} 
                />
              </Card>
            </Col>
            
            <Col xs={24} md={12}>
              <Card 
                title={<><TeamOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 工作经历</>}
                style={{ 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: 'none',
                  height: '100%'
                }}
                bodyStyle={{ padding: '20px' }}
              >
                <Timeline 
                  items={experience.map(item => ({
                    children: (
                      <div>
                        <div style={{ fontWeight: 'bold', color: '#1890ff', fontSize: '15px' }}>{item.year}</div>
                        <div style={{ marginTop: '5px', fontSize: '14px' }}>{item.content}</div>
                      </div>
                    )
                  }))} 
                />
              </Card>
            </Col>
          </Row>
          
          {/* 主要荣誉 */}
          <Card 
            title={<><TrophyOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 主要荣誉</>} 
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            <List
              dataSource={achievements}
              renderItem={item => (
                <List.Item style={{ padding: '8px 0', borderBottom: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#1890ff',
                      borderRadius: '50%',
                      marginRight: '12px'
                    }} />
                    <span style={{ fontSize: '15px' }}>{item}</span>
                  </div>
                </List.Item>
              )}
            />
          </Card>
          
          {/* 研究方向 */}
          <Card 
            title={<><ExperimentOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 研究方向</>} 
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            <Row gutter={[16, 16]}>
              {researchDirections.map((direction, index) => (
                <Col xs={24} md={12} key={index}>
                  <Card 
                    size="small"
                    title={<span style={{ color: direction.color, fontWeight: '600' }}>{direction.title}</span>}
                    style={{ 
                      height: '100%',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                      border: 'none'
                    }}
                    bodyStyle={{ padding: '16px' }}
                  >
                    <p style={{ marginBottom: '10px', fontSize: '14px' }}>{direction.description}</p>
                    <div>
                      {direction.keywords.map((keyword, idx) => (
                        <Tag key={idx} color={direction.color} style={{ marginBottom: '5px', fontSize: '12px' }}>
                          {keyword}
                        </Tag>
                      ))}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
          
          {/* 代表性论文 */}
          <Card 
            title={<><PaperClipOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 代表性论文</>} 
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            <Table 
              columns={paperColumns}
              dataSource={representativePapers}
              pagination={false}
              size="small"
              scroll={{ x: 'max-content' }}
              style={{ marginBottom: '15px' }}
            />
            <div style={{ textAlign: 'right' }}>
              <a href="#" style={{ color: '#1890ff', fontSize: '14px', fontWeight: '500' }}>查看更多论文 →</a>
            </div>
          </Card>
          
          {/* 科研项目 */}
          <Card 
            title={<><ProjectOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 科研项目</>}
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            <Table 
              columns={projectColumns}
              dataSource={researchProjects}
              pagination={false}
              size="small"
              scroll={{ x: 'max-content' }}
            />
          </Card>

          {/* 授权专利 */}
          <Card 
            title={<><PaperClipOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 授权专利</>}
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            <Table 
              columns={patentColumns}
              dataSource={patents}
              pagination={false}
              size="small"
              scroll={{ x: 'max-content' }}
              style={{ marginBottom: '15px' }}
            />
            <div style={{ textAlign: 'right' }}>
              <a href="#" style={{ color: '#1890ff', fontSize: '14px', fontWeight: '500' }}>查看更多专利 →</a>
            </div>
          </Card>

          {/* 专著 */}
          <Card 
            title={<><BookOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 专著</>}
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            <Table 
              columns={monographColumns}
              dataSource={monographs}
              pagination={false}
              size="small"
              scroll={{ x: 'max-content' }}
            />
          </Card>

          {/* 研究领域详细描述 */}
          <Card 
            title={<><ExperimentOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 研究领域</>}
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            {researchFieldDetails.map((item, index) => (
              <p key={index} style={{ fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
                {item}
              </p>
            ))}
          </Card>

          {/* 科研与教学情况 */}
          <Card 
            title={<><TrophyOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 科研与教学情况</>}
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            {researchTeachingDetails.map((item, index) => (
              <p key={index} style={{ fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
                {item}
              </p>
            ))}
          </Card>

          {/* 学术兼职和社会职务 */}
          <Card 
            title={<><TeamOutlined style={{ marginRight: '8px', color: '#1890ff' }} /> 学术兼职和社会职务</>}
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: 'none'
            }}
            bodyStyle={{ padding: '20px' }}
          >
            <List
              dataSource={academicAppointments}
              renderItem={item => (
                <List.Item style={{ padding: '8px 0', borderBottom: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#1890ff',
                      borderRadius: '50%',
                      marginRight: '12px',
                      marginTop: '8px'
                    }} />
                    <div style={{ fontSize: '14px', lineHeight: '1.6' }}>{item}</div>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Professor;
