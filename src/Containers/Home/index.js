import React, { Component } from 'react';
import { Layout,Avatar, Row, Col, Button } from "antd";
import PropTypes from 'prop-types';
import "./style.css"
class Home extends Component{

    onEnter(){
        this.props.history.push("/posts")
    }

    render(){
        return(
            <Layout className="home_cover">
                <div className="avatar_middle">
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span="24"><Avatar className="image" src="/static/avatar.jpg" size={96}></Avatar></Col>
                    </Row>
                    <Row type="flex" justify="space-around" align="middle" style={{paddingTop:"30px"}}>
                        <Col span="24"><Button onClick={this.onEnter.bind(this)}  type="primary" size="large">Enter</Button></Col>
                    </Row>
                </div>
            </Layout>
        )
        
    }
}


export default Home