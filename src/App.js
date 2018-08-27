import React, { Component } from 'react';
import { Layout,Menu,Breadcrumb,Icon } from "antd";

import './App.css';
import Sider from 'antd/lib/layout/Sider';
import {  } from "antd/lib/style/css";
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header,Content,Footer } = Layout

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
        <Header>
          <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          
          </Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>main Content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
       </Layout>
      </div>
    );
  }
}

export default App;
