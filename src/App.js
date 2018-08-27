import React, { Component } from 'react';
import { Layout,Breadcrumb } from "antd";
import Logo from 'Components/Logo';
import 'App.css';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuItem from 'antd/lib/menu/MenuItem';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import HeaderMenu from "Components/Menu";
const { Header,Content,Footer } = Layout

class App extends Component {
  render() {
    return (
      <div>
       <Layout className="App">
        <Header>
          <Logo title="Sersoong's blog"/>
          <HeaderMenu/>
          </Header>
        <Layout>
          {/* <Sider width={200} style={{background:'#fff'}}>left sidebar</Sider> */}

          <Content style={{padding:'0 50px'}}>
            <Breadcrumb style={{margin:'16px 0'}}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
            </Breadcrumb>
            </Content>
        </Layout>
        <Footer>Sersoong's blog ©2018 Created by Sersoong</Footer>
       </Layout>
      </div>
    );
  }
}

export default App;
