import React, { Component } from 'react';
import { Layout } from "antd";
import Logo from 'Components/Logo';
import HeaderMenu from "Components/Menu";

const { Header } = Layout

class HeaderContent extends Component {
    render(){
        return(
            <Header>
                <Logo title="Sersoong's blog"/>
                <HeaderMenu navs={this.props.navs}/>
            </Header>
        )
    }
}

export default HeaderContent