import React, { Component } from 'react';
import { Layout,Breadcrumb } from "antd";
import 'App.css';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import HeaderContent from 'Containers/Header';
const { Content,Footer } = Layout

class App extends Component {
  render() {
    return (
      <div>
       <Layout className="App">
        <HeaderContent/>
        <Layout>
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
