import React, { Component } from 'react';
import { Layout } from "antd";
import Logo from 'Components/Logo';
import HeaderMenu from "Components/Menu";
const { Header } = Layout
class HeaderContent extends Component {
    render(){
        const navs = [
            {title:"Home",url:""},
            {title:"Posts",url:""},
            {title:"About Me",url:""},
        ]
        return(
            <Header>
                <Logo title="Sersoong's blog"/>
                <HeaderMenu navs={navs}/>
            </Header>
        )
    }
}

export default HeaderContent