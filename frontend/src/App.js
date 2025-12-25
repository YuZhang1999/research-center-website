import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

// 导入布局组件
import Layout from './components/Layout';

// 导入页面组件
import Home from './pages/Home';
import Professor from './pages/Professor';
import Research from './pages/Research';
import Team from './pages/Team';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import PilotBase from './pages/PilotBase';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Intranet from './pages/Intranet';
import PhotocatalystGPT from './pages/PhotocatalystGPT';
import MaterialFilter from './pages/MaterialFilter';

// 导入样式
import './assets/css/App.css';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="professor" element={<Professor />} />
            <Route path="research" element={<Research />} />
            <Route path="team" element={<Team />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="projects" element={<Projects />} />
            <Route path="pilot-base" element={<PilotBase />} />
            <Route path="resources" element={<Resources />} />
            <Route path="material-filter" element={<MaterialFilter />} />
            <Route path="photocatalyst-gpt" element={<PhotocatalystGPT />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* 登录页面和内网页面不使用Layout（有自己的完整布局） */}
          <Route path="/login" element={<Login />} />
          <Route path="/intranet" element={<Intranet />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
