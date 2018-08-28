import React, { Component } from 'react';
import { Layout,Avatar, Row, Col } from "antd";
import "./style.css"
class Home extends Component{
    render(){
        return(
            <Layout className="home_cover">
                <div>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span="24"><Avatar className="image" src="/static/avatar.jpg" size={96}></Avatar></Col>
                    </Row>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span="24"><a className="title">Sersoong</a></Col>
                    </Row>
                    
                </div>
            </Layout>
        )
        
    }
}

export default Home