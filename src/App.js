import 'App.css';
import React, { Component } from 'react';
import { Layout,Breadcrumb } from "antd";
import axios from 'axios';
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import HeaderContent from 'Containers/Header';
import FooterContent from "Containers/Footer";
import Home from 'Containers/Home';
import Posts from 'Containers/Posts';
import About from 'Containers/About';
const { Content,Footer } = Layout

class App extends Component {

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
    var result = axios.all([this.getSiteConfig(),this.getNavMenu()])
    .then(axios.spread(function (site_config,navs){
      return {site_config:site_config.data,navs:navs.data}
    }))
    console.log(result)
  }

  render() {
    // this.setTitle(this.state.site_config.title)
    return (
      <BrowserRouter>
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
            <Switch>
              <Route exact path ="/" component={Home}/>
              <Route path ="/posts" component={Posts}/>
              <Route path ="/about" component={About}/>
            </Switch>
            
            </Content>
        </Layout>
        <Footer><FooterContent /></Footer>
       </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
