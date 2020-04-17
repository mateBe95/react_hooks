import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './SideNav.scss';
import AppMenu from '../AppMenu/AppMenu';
import AppContent from '../AppContent/AppContent';

const { Header, Sider } = Layout;

export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  const trigger = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <AppMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: trigger,
            }
          )}
        </Header>
        <AppContent />
      </Layout>
    </>
  );
}
