import React, { Component } from 'react';
import { Row, Col,List,BackTop,Icon} from "antd";
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
        // console.log(this.props.location.query)
        var temp_list = []
        if(typeof this.props.location.query!=="undefined"){
            this.props.article_list.map((item,i)=>{
                if(item.tags.indexOf(this.props.location.query.tag)>-1){
                    temp_list.push(item)
                }
            })
        } else{
            temp_list = this.props.article_list
        }
        
        return(
            <div className="row">
                <BackTop>
                        <div className="ant-back-top-inner"><Icon type="arrow-up"/></div>
                </BackTop>
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
                            dataSource={ temp_list }
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