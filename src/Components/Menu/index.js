import React,{ Component } from 'react';
import { NavLink } from "react-router-dom";
import {Menu,Icon} from "antd";
import PropTypes from 'prop-types';

class HeaderMenu extends Component {
    static propTypes = {
        navs:PropTypes.array.isRequired
    }

    static defaultProps = {
        navs:[{title:'Home',url:'/'}]
    }

    render(){
        // console.log(this.props)
        var path = document.location.pathname
        var num = '-1'
        for(var i=0;i<this.props.navs.length;i++){
            if (this.props.navs[i].url === path){
                num = i.toString()
            }
        }

        return(
        <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[num]}
            style={{lineHeight:'64px',float:'right'}}
            >
            {this.props.navs.map((nav,i)=>{
                return(
                    <Menu.Item key={i}>    
                        <NavLink to={nav.url}><Icon type={nav.icon}/>{nav.title}</NavLink> 
                    </Menu.Item>
                )
            })}
            
            </Menu>
        )
    }

}

export default HeaderMenu