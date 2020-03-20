import React, { useState } from "react";
import { Layout } from "antd";

const { Sider } = Layout;
export default function SideNav({ children }: any) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {children}
      </Sider>
    </>
  );
}
