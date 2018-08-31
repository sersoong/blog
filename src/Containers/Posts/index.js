import React, { Component } from 'react';
import { Row, Col,List} from "antd";
///style
import "./style.css"
///subcomponents
import ListItem from 'Components/PostsListItem';
import Intro from 'Components/PostsCard';

class Posts extends Component{
    componentWillMount(){
        this.props.articleList()
    }

    render(){
        // console.log(this.props.article_list)
        const listData = [];
        for (let i = 0; i < 23; i++) {
        listData.push({
            href: 'http://ant.design',
            title: `ant design part ${i}`,
            thumb: '/static/02.png',
            date: '2018/08/30',
            like: '39',
            messages: '3',
            tags:['foo','bar'],
            avatar: '/static/02.png',
            description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
        }
          
        return(
            <div className="row">
                <Row  type="flex" justify="center" align="middle" >
                    <Col className="content" span="20">
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                //   console.log(page);
                                },
                                pageSize: 4,
                              }}
                            header={<Intro {...this.props}/>}
                            bordered
                            dataSource={ this.props.article_list }
                            renderItem={item =>{
                                return (
                                    <ListItem item={item} />
                                )
                            } }
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default (props)=>{ return <Posts {...props} />}