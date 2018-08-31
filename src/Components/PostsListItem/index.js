import React, { Component } from 'react';
import { Tag, List, Icon} from "antd";

export default class ListItem extends Component {
    render(){
        // console.log(this.props)
        const IconText = ({ type, text }) => (
            <span style={{ marginLeft:15 }}>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
          );
        
        return(
            <List.Item 
            key={this.props.item.title}
            actions={[<IconText 
                type="like-o" 
                text={this.props.item.like} 
                />,
                <IconText 
                type="message" 
                text={this.props.item.messages} />,
                <div>
                    {this.props.item.date}
                </div>,
                <div>
                    {this.props.item.tags.map((tag,i)=>{return (<Tag key={i} color="#108ee9">{tag}</Tag>)})}
                </div>
                ]}
            extra={<a href={this.props.item.href}><img width={150} alt="logo"  src={this.props.item.thumb}/></a>}
            >
                <List.Item.Meta
                    title={<a href={this.props.item.href}>{this.props.item.title}</a>}
                    description={this.props.item.description}/>
                {this.props.item.content}
            </List.Item>
        )
    }
}