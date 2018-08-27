import React, { Component } from 'react';
import { Layout } from "antd";
import "./style.css"

const { Footer } = Layout

class FooterContent extends Component {
    render(){
        return(
            <Footer>
                <a className="FooterName">{this.props.title}</a> ©2018 Created by {this.props.creator}
            </Footer>
        )
    }
}

export default FooterContent