import React, { Component } from 'react';
import { Layout,Breadcrumb } from "antd";
import 'App.css';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import HeaderContent from 'Containers/Header';
import axios from 'axios';

const { Content,Footer } = Layout

class App extends Component {

  constructor(){
    super()
    this.state = {navs:[{title:"",url:""}]}
}

componentWillMount(){
    const _this = this
    axios.get("/nav_menu.json")
    .then(function (response){
        _this.setState({navs:response.data})
    })
    .catch(function(error){
        console.log(error)
    })

}

  render() {
    return (
      <div>
       <Layout className="App">
        <HeaderContent navs={this.state.navs}/>
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
