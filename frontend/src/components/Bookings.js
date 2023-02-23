import { Layout, Menu, Breadcrumb } from "antd";
import React, { Component, useState } from "react";
import BookingList from "./BookingList";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Bookings = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <BookingList />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Bookings;
