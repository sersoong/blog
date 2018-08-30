import React, { Component } from 'react';
import { Layout,Card, Row, Col,List, Icon, Button, Avatar } from "antd";
import "./style.css"

const { Content }  = Layout

class Posts extends Component{

    render(){
        const listData = [];
        for (let i = 0; i < 23; i++) {
        listData.push({
            href: 'http://ant.design',
            title: `ant design part ${i}`,
            avatar: '/static/02.png',
            description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
        }

        const IconText = ({ type, text }) => (
            <span style={{ marginLeft:15 }}>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
          );
          
        return(
            <div className="row">
                <Row  type="flex" justify="center" align="middle" >
                    <Col className="content" span="20">
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                  console.log(page);
                                },
                                pageSize: 4,
                              }}
                            header={<Card 
                                hoverable='true' 
                                title='Header Title' 
                                bordered>
                                    <Card.Meta 
                                    title="meta title" 
                                    avatar={<Avatar 
                                        src="/static/avatar.jpg" 
                                        description={
                                            <div>meta description</div>
                                        }/>} /> 
                                        Header
                                </Card>}
                            bordered
                            dataSource={ listData }
                            renderItem={item => (
                                <List.Item 
                                key={item.title}
                                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                >
                                    <List.Item.Meta avatar={<Avatar size={60} src={item.avatar}/>}
                                        title={<a>{item.title}</a>}
                                        description={item.description}/>
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default (props)=>{ return <Posts {...props} />}