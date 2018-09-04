import React, { Component } from 'react';
import { Row, Col,List,BackTop,Icon} from "antd";


///subcomponents
import ListItem from 'Components/PostsListItem';
import Intro from 'Components/PostsCard';

import marked from "marked";
import highlight from "highlight.js";
///style
import "./style.css"
import "Containers/Post/js-highlight.css"
import "github-markdown-css"

highlight.configure({
    tabReplace:'  ',
    classPrefix:'hljs-',
    languages:['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
})

marked.setOptions({
    gfm:true,
    breaks:true,
    highlight(code){
        return highlight.highlightAuto(code).value
    }
})
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
                                    <ListItem item={item} marked={marked(item.content)} {...this.props} />
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