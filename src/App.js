import React, { Component } from 'react';
import { Layout,Breadcrumb } from "antd";
import 'App.css';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import HeaderContent from 'Containers/Header';
import axios from 'axios';
import FooterContent from "Containers/Footer";
const { Content,Footer } = Layout

class App extends Component {

  constructor(){
    super()
    this.state = {site_config:"",navs:[{title:"",url:""}]}
  }

  setTitle(title){
    document.title = title
  }

  getNavMenu(){
   
    return axios.get("/nav_menu.json")
  }

  getSiteConfig(){
    return axios.get("/site_config.json")
  }

  ajaxGetInit(){
    const _this = this
    axios.all([this.getSiteConfig(),this.getNavMenu()])
    .then(axios.spread(function (site_config,navs){
      _this.setState({site_config:site_config.data,navs:navs.data})
    }))
  }

  componentWillMount(){
    
    this.ajaxGetInit()    

  }

  render() {
    this.setTitle(this.state.site_config.title)
    return (
      <div>
       <Layout className="App">
        <HeaderContent title={this.state.site_config.title} navs={this.state.navs}/>
        <Layout>
          <Content style={{padding:'0 50px'}}>
            <Breadcrumb style={{margin:'16px 0'}}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
            </Breadcrumb>
            </Content>
        </Layout>
        <Footer><FooterContent title={this.state.site_config.title} creator={this.state.site_config.creator}/></Footer>
       </Layout>
      </div>
    );
  }
}

export default App;
