import React, { Component } from 'react';
import { Row, Col,Card, Avatar, Tag, Icon,Button} from "antd";
import marked from "marked";
///style

///subcomponents


class Post extends Component{
    
    static defaultProps = {
        article:{
            title:"",
            date:"",
            tags:[],
            avatar:"",
            author:"",
            words:"",
            reads:"",
            comments:"",
            likes:"",
            content:"",
            id:-1
        }
    }

    onBack(){
        this.props.history.push("/posts")
    }

    componentWillMount(){
        this.props.get_Article()
    }

    render(){
        // console.log(this.props)
        return(
                <div>
                
                    <Row type="flex" justify="center" align="middle" style={{lineHeight:"100px"}}><Col span="20" style={{textAlign:"left"}}><Button onClick={this.onBack.bind(this)} icon="left" size="large">Back</Button></Col></Row>
                    <Row  type="flex" justify="center" align="middle" >
                        <Col className="content" span="20">
                            <Card
                            title={<h1>{this.props.article.title}</h1>}
                            bordered
                            hoverable={true}
                            >
                            <Card.Meta 
                            avatar={<Avatar size={64} src={this.props.article.avatar}/>} 
                            title = {<h3>{this.props.article.author}</h3>}
                            description = {<div>{this.props.article.date} <Icon type="eye-o"/> {this.props.article.reads} <Icon type="message"/> {this.props.article.comments} <Icon type="like-o"/> {this.props.article.likes} <Icon type="tag"/> {this.props.article.tags.map((tag,i)=>{return <Tag key={i} color="#108ee9">{tag}</Tag>})}</div>}
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