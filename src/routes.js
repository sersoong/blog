import React, { Component } from 'react';
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import { Layout } from "antd";
import HeaderContent from 'Containers/Header';
import FooterContent from "Containers/Footer";
import Home from 'Containers/Home';
import Posts from 'Containers/Posts';
import About from 'Containers/About';
import { getNavMenu,getSiteConfig } from "fetchdata";
import axios from "axios";

import { createStore,applyMiddleware } from "redux";

class Routes extends Component {
    constructor(props){
        super(props)
        this.state = {site_config:{},navs:[]}
      }

    setTitle(title){
        document.title = title
    }
    // onIncreaseClick(dispatch){
    //     dispatch({
    //         type:'INIT_SITE',
    //         payload:{
    //           count:0
    //         }
    //     }
    //     )
    //   }
    ajaxGetInit(){
        const _this = this
        axios.all([getSiteConfig(),getNavMenu()])
            .then(axios.spread(function (site_config,navs){
            _this.setState({site_config:site_config.data,navs:navs.data}) 
        }))
    
      }
    componentWillMount(){
        this.ajaxGetInit()
    }

    render(){
        console.log(this.props)
        this.setTitle(this.state.site_config.title)
        return(
            <div>
                <span>{this.props.value}</span>
                <button onClick={this.props.onIncreaseClick}>Get</button>
            </div>
        // <BrowserRouter>
        //     <Layout className="App">
        //     <HeaderContent title={this.state.site_config.title} navs={this.state.navs}/>
        //     <Layout avatar={this.state.site_config.avatar}>
        //         <Switch>
        //         <Route exact path ="/" component={Home}/>
        //         <Route path ="/posts" component={Posts}/>
        //         <Route path ="/about" component={About}/>
        //         </Switch>
        //     </Layout>
        //     <FooterContent title={this.state.site_config.title} creator={this.state.site_config.creator}/>
        //     </Layout>
        // </BrowserRouter>
        )
    }
    
}

export default Routes