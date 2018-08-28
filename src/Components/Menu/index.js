import React,{ Component } from 'react';
import { NavLink } from "react-router-dom";
import {Menu} from "antd";
import PropTypes from 'prop-types';
class HeaderMenu extends Component {
    render(){
        var path = document.location.pathname
        var num = '0'
        if (this.props.navs){
            for(var i=0;i<this.props.navs.length;i++){
                if (this.props.navs[i].url === path){
                    num = i.toString()
                }
            }
        }
        console.log(num)
        return(
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[num]}
          style={{lineHeight:'64px',float:"right"}}
          >
          {this.props.navs.map((nav,i)=>{
              return(
                    <Menu.Item key={i}>
                        <NavLink to={nav.url}>{nav.title}</NavLink> 
                    </Menu.Item>
              )
          })}
          
          </Menu>
        )
    }

}

export default HeaderMenu