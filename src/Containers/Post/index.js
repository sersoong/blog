import React, { Component } from 'react';
import { Row, Col,Card, Avatar, Tag, Icon,Button,BackTop} from "antd";
import marked from "marked";
import highlight from "highlight.js";
import "./js-highlight.css"
import "github-markdown-css"
import "./style.css"
///style

///subcomponents

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

class Post extends Component{

    onBack(){
        this.props.history.push("/blog/posts/")
    }

    onGotoPostsTag(tag){
        var path = {
            pathname:"/blog/posts/",
            query:{tag:tag}
        }
        this.props.history.push(path)
    }

    componentWillMount(){
        this.props.get_Article(this.props.match.params.id)
    }

    render(){
        // console.log(this.props)
        return(
                <div className="markdown-body">
                    <BackTop style={{bottom:"90px"}} onClick={this.onBack.bind(this)}>
                        <div className="ant-back-top-inner-rect "><Icon type="left"/></div>
                    </BackTop>
                    <BackTop style={{bottom:"40px"}}>
                        <div className="ant-back-top-inner"><Icon type="arrow-up"/></div>
                    </BackTop>
                    <Row type="flex" justify="center" align="middle" style={{lineHeight:"100px"}}><Col span="20" style={{textAlign:"left"}}><Button onClick={this.onBack.bind(this)} icon="left" size="large">Back</Button></Col></Row>
                    <Row  type="flex" justify="center" align="middle" >
                        <Col className="content" span="20">
                            <Card
                            title={<h1>{this.props.article.title}</h1>}
                            bordered
                            hoverable={true}
                            actions={[<div ><Button size={"large"} className="actions_like" type="primary" icon="like"></Button><Button icon="left" className="actions_button">Prev</Button><Button icon="bars" onClick={this.onBack.bind(this)} className="actions_button">Back</Button><Button icon="right" className="actions_button">Next</Button></div>]}
                            >
                            <Card.Meta 
                            avatar={<Avatar size={64} src={this.props.article.avatar}/>} 
                            title = {<h3>{this.props.article.author}</h3>}
                            description = {<div>{this.props.article.date} <Icon type="eye-o"/> {this.props.article.reads} <Icon type="message"/> {this.props.article.comments} <Icon type="like-o"/> {this.props.article.likes} <Icon type="tag"/> {this.props.article.tags.map((tag,i)=>{return <Tag key={i} onClick={this.onGotoPostsTag.bind(this,tag)} color="#108ee9">{tag}</Tag>})}</div>}
                            />
                            
                            <div style={{paddingTop:"40px"}} dangerouslySetInnerHTML={{__html:marked(this.props.article.content)}}></div>
                            </Card>
                            
                        </Col>
                    </Row>
                </div>
            )
       
    }
}

export default (props)=>{ return <Post {...props} />}