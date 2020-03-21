import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import "./AppMenu.scss";
import { Link } from "react-router-dom";

export default function AppMenu() {
  return (
    <>
      <div className="logo"></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">
            <UserOutlined />
            <span>First Content</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/secondContent">
            <VideoCameraOutlined />
            <span>Second Content</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/thirdContent">
            <UploadOutlined />
            <span>Third Content</span>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
}
