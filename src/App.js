import 'App.css';
import React, { Component } from 'react';

import Routes from "routes";
import { Provider,connect } from "react-redux";
import { createStore } from "redux";

const INIT_SITE = 'INIT_SITE'

const initAction = {type:INIT_SITE}

const reducer = (state={site_config:{},navs:[]},action) =>{
  const count = state.count
  switch(action.type){
    case INIT_SITE:
    return {count:count+1}
    default:
    return state
  }
}

const store = createStore(reducer)

function mapStateToProps(state){
  return{
      value:state.count
  }
}

function mapDispatchToProps(dispatch){
  return{
      onIncreaseClick:()=>{
        dispatch(initAction)
      }
  }
}

const AppConnect = connect(mapStateToProps,mapDispatchToProps)(Routes)

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
