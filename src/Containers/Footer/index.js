import React, { Component } from 'react';
import { Layout } from "antd";
import "./style.css"

const { Footer } = Layout

class FooterContent extends Component {
    static defaultProps = {
        title:"Sersoong's blog",
        creator:"Sersoong"
    }
    render(){
        return(
            <Footer className="footer">
                <a className="footer" href="/">{this.props.title}</a> ©2018 Created by {this.props.creator}
            </Footer>
        )
    }
}

export default FooterContent