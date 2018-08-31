import React, { Component } from 'react';
import { Card, Avatar } from "antd";

export default class Intro extends Component {

    render(){
        return(
            <Card 
            title={<div className="card_title">{this.props.site_config.card.title}</div>}
            hoverable='true' 
            bordered>
                <Card.Meta 
                title={this.props.site_config.card.meta_title} 
                avatar={<Avatar 
                    size={80} 
                    src={this.props.site_config.avatar} 
                    />}
                description={<div className="card_description"> {this.props.site_config.card.meta_description}</div>} 
                /> 
                    
            </Card>

        )
    }
}