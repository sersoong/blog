import React, { Component } from 'react';
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import { Layout } from "antd";
import HeaderContent from 'Containers/Header';
import FooterContent from "Containers/Footer";
import Home from 'Containers/Home';
import Posts from 'Containers/Posts';
import About from 'Containers/About';

class Routes extends Component {

    setTitle(title){
        document.title = title
    }

    componentWillMount(){
        this.props.initsite()
    }

    render(){
        console.log(this.props)
        
        this.setTitle(this.props.site_config.title)
        return(
        <BrowserRouter>
            <Layout className="App">
            <HeaderContent title={this.props.site_config.title} navs={this.props.navs}/>
            <Layout>
                <Switch>
                <Route exact path ="/" render={(props)=><Home {...props} {...this.props}/>}/>
                <Route path ="/posts" component={Posts}/>
                <Route path ="/about" component={About}/>
                </Switch>
            </Layout>
            <FooterContent title={this.props.site_config.title} creator={this.props.site_config.creator}/>
            </Layout>
        </BrowserRouter>
        )
    }
    
}

export default Routes