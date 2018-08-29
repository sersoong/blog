import 'App.css';
import React, { Component } from 'react';
import thunk from 'redux-thunk';
import Routes from "routes";
import { Provider,connect } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';
import Axios from 'axios';
import { INIT_SITE,ADD,Add,Init_Site } from "actions";
import { getNavMenu,getSiteConfig } from "fetchdata";


const reducer = (state,action) =>{
  const count = state.count
  switch(action.type){
    case ADD:
    console.log("add")
    return {...state,count:count+action.payload.add}
    case INIT_SITE:
    console.log("initsite")
    return {...state,site_config:action.payload.site_config,navs:action.payload.navs}
    default:
    return state
  }
}

const store = createStore(reducer,{count:0,site_config:{title:''}},applyMiddleware(thunk,promiseMiddleware))

function mapStateToProps(state){
  return{
      value:state.count,
      site_config:state.site_config,
      navs:state.navs,
  }
}

function add(){
  return(dispatch)=>{
    dispatch(Add())
  }
}

function initsite(){
  return(dispatch)=>{
    Axios.all([getSiteConfig(),getNavMenu()])
    .then(Axios.spread(function (site_config,navs){
      dispatch(Init_Site(site_config,navs))
}))
  }
}

function dispatch(){
  return dispatch
}

const AppConnect = connect(mapStateToProps,{ add,initsite })(Routes)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppConnect />
      </Provider>
    );
  }
}

export default App;
