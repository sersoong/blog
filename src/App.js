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
    this.state = {title:"",navs:[{title:"",url:""}]}
  }

  setTitle(title){
    document.title = title
  }

  getNavMenu(){
   
    return axios.get("/nav_menu.json")
  }

  getTitle(){
    return axios.get("/site_config.json")
  }

  ajaxGetInit(){
    const _this = this
    axios.all([this.getTitle(),this.getNavMenu()])
    .then(axios.spread(function (title,navs){
      _this.setState({title:title.data["title"],navs:navs.data})
    }))
  }

  componentWillMount(){
    
    this.ajaxGetInit()    

  }

  render() {
    this.setTitle("Sersoong's blog")
    return (
      <div>
       <Layout className="App">
        <HeaderContent title={this.state.title} navs={this.state.navs}/>
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
