import 'App.css';
import React, { Component } from 'react';
import { Layout,Breadcrumb } from "antd";
import axios from 'axios';
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import HeaderContent from 'Containers/Header';
import FooterContent from "Containers/Footer";
import Home from 'Containers/Home';
import Posts from 'Containers/Posts';
import About from 'Containers/About';

const history = createBrowserHistory()

class App extends Component {
  constructor(){
    super()
    this.state = {site_config:{},navs:[]}
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
      <BrowserRouter>
       <Layout className="App">
        <HeaderContent title={this.state.site_config.title} navs={this.state.navs}/>
        <Layout history={history}>

            {/* <Breadcrumb style={{margin:'16px 0'}}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
            </Breadcrumb> */}
            
            <Switch>
              <Route exact path ="/" component={Home}/>
              <Route path ="/posts" component={Posts}/>
              <Route path ="/about" component={About}/>
            </Switch>
        </Layout>
        <FooterContent title={this.state.site_config.title} creator={this.state.site_config.creator}/>
       </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
