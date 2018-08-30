import React, { Component } from 'react';
import { Layout,Avatar, Row, Col, Button,Icon } from "antd";
import "./style.css"

const {Content} = Layout

class Home extends Component{
    onEnter(){
        this.props.history.push("/posts")
    }

    render(){
        // console.log(this.props)
        return(
            <Layout>
                <div className="avatar_middle">
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span="24"><Avatar className="image" src={this.props.site_config.avatar} size={96}></Avatar></Col>
                    </Row>
                    <Row type="flex" justify="space-around" align="middle" style={{paddingTop:"30px"}}>
                        <Col span="24"><Button onClick={this.onEnter.bind(this)}  type="primary" size="large">Enter<Icon type='login'/></Button></Col>
                    </Row>
                </div>
            </Layout>
        )
        
    }
}

export  default (props)=>{return <Home {...props}/>}