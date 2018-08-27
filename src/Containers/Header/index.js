import React, { Component } from 'react';
import { Layout } from "antd";
import Logo from 'Components/Logo';
import HeaderMenu from "Components/Menu";
import axios from 'axios';

const { Header } = Layout

class HeaderContent extends Component {

    componentWillMount(){
        axios.get("/nav_menu.json")
        .then(function (response){
            navs = response.data
            console.log(navs)
        })
        .catch(function(error){
            console.log(error)
        })
        
    }

    render(){

        console.log(navs)
        return(
            <Header>
                <Logo title="Sersoong's blog"/>
                <HeaderMenu navs={navs}/>
            </Header>
        )
    }
}

export default HeaderContent