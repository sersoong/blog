import React, { Component } from 'react';
import { Row, Col,List} from "antd";
///style
import "./style.css"
///subcomponents
import ListItem from 'Components/PostsListItem';
import Intro from 'Components/PostsCard';

class Posts extends Component{
    componentWillMount(){
        this.props.get_ArticleList()
    }

    render(){
        // console.log(this.props)
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
                                    <ListItem item={item} {...this.props} />
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