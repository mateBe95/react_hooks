import React from 'react';
import { Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './AppMenu.scss';
import { Link } from 'react-router-dom';

export default function AppMenu() {
  return (
    <>
      <div className="logo">COVID-19</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">
            <UserOutlined />
            <span>Dashboard - Polska</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/secondContent">
            <VideoCameraOutlined />
            <span>Dashboard - Świat</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/thirdContent">
            <UploadOutlined />
            <span>Mapa polski i świata</span>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
}
