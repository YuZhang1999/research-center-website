import React from 'react';
import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const { Content } = AntLayout;

const Layout = () => {
  return (
    <AntLayout>
      <Header />
      <Content style={{ minHeight: 'calc(100vh - 64px - 70px)' }}>
        <Outlet />
      </Content>
      <Footer />
    </AntLayout>
  );
};

export default Layout;
