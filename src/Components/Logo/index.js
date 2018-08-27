import React,{ Component } from 'react';
import './style.css';
class Logo extends Component{
    render(){
        return(
            <div className="logo"><h1><a href="/">{this.props.title}</a></h1></div>
        )
    }
}

export default Logo