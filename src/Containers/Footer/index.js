import React, { Component } from 'react';
import { Layout } from "antd";
import "./style.css"
import { Link } from "react-router-dom";

const { Footer } = Layout

class FooterContent extends Component {
    static defaultProps = {
        title:"Sersoong's blog",
        creator:"Sersoong"
    }
    render(){
        var url = "/"
        if(this.props.navs.length>0){
            this.props.navs.map((nav)=>{
                if(nav.title==='Home'){
                    url = nav.url
                }
                return[]
            })
        }
        return(
            <Footer className="footer">
                <Link to={url}>{this.props.title}</Link> ©2018 Created by {this.props.creator}
            </Footer>
        )
    }
}

export default FooterContent