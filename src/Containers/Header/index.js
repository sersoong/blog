import React, { Component } from 'react';
import { Layout } from "antd";
import Logo from 'Components/Logo';
import HeaderMenu from "Components/Menu";

const { Header } = Layout

class HeaderContent extends Component {
    render(){
        // console.log(this.props)

        return(
            <Header style={{display:'block'}}>
                <Logo title={this.props.site_config.title} navs={this.props.navs}/>
                <HeaderMenu navs={this.props.navs}/>
            </Header>
        )
    }
}

export default HeaderContent