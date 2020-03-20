import React from "react";
import { Layout } from "antd";
import './AppContent.scss'

const { Content } = Layout;
export default function AppContent() {
  return (
    <>
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 580
        }}
      >
        Content
      </Content>
    </>
  );
}
