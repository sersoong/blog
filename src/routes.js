import React, { Component } from 'react';
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import { Layout } from "antd";
import BodyContent,{HeaderContent,FooterContent} from "Containers";
import "./App.css"
const {Content} = Layout

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
                    <Content className="home_cover">
                            <Switch>
                            {this.props.navs.map((nav,i)=>{
                                    return <Route exact key={i} path ={nav.url} render={(props)=>BodyContent(nav.title,{...props,...this.props})}/>
                                }
                            )}
                            </Switch>
                    </Content>
                    <FooterContent title={this.props.site_config.title} creator={this.props.site_config.creator}/>
                </Layout>
            </Layout>
        </BrowserRouter>
        )
    }
    
}

export default Routes