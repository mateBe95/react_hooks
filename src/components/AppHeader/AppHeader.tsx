import React from "react";
import {  Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './AppHeader.scss'
const {Header} = Layout;

export default function AppHeader(props: any) {
    return (
        <>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: ()=>{},
            })}
          </Header>
      </>
    )
}
