import React,{ Component } from 'react';
import './style.css';
import { Link } from "react-router-dom";

class Logo extends Component{
    render(){
        var url = "/"
        if(this.props.navs.length>0){
            this.props.navs.map((nav,i)=>{
                if(nav.title==='Home'){
                    url = nav.url
                }
                return[]
            })
        }
        // console.log(this.props)
        return(
            <div className="logo"><h1><Link to={url}>{this.props.title}</Link></h1></div>
        )
    }
}

export default Logo