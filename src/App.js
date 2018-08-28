import 'App.css';
import React, { Component } from 'react';

import Routes from "routes";
import { Provider,connect } from "react-redux";
import { createStore,applyMiddleware } from "redux";

const INIT_SITE = 'INIT_SITE'

const initAction = {
  type:INIT_SITE,
  payload:{
    add:1
  }
}

const reducer = (state,action) =>{
  const count = state.count
  console.log(action.payload)
  switch(action.type){
    case INIT_SITE:
    return {count:count+action.payload.add}
    default:
    return state
  }
}

const store = createStore(reducer,{count:0})

function mapStateToProps(state){
  console.log(state)
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
