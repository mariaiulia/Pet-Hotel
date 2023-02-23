import { Layout, Menu } from "antd";
import React, { Component, useState } from "react";
import MyBookingList from "./myBookingList";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MyBookings = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <MyBookingList />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyBookings;
