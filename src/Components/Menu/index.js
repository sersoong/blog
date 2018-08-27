import React,{ Component } from 'react';
import {Menu} from "antd";

class HeaderMenu extends Component {
    render(){
        const navs = [
            {title:"Home",url:""},
            {title:"Posts",url:""},
            {title:"About Me",url:""},
        ]

        return(
            
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{lineHeight:'64px',float:"right"}}
          >
          {navs.map((nav,i)=>{
              return(
                    <Menu.Item key={i}>{nav.title}</Menu.Item>
              )
          })}
          
          </Menu>
        )
    }

}

export default HeaderMenu