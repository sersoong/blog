import thunk from 'redux-thunk';
import { connect } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import Routes from "routes";
import { Add } from "actions";
import { Init_Site } from 'Containers/Home/action';

import { getSiteInfo } from "fetchdata";
import reducer from "reducers";

export const store = createStore(reducer,applyMiddleware(thunk))

export function mapStateToProps(state){
  return{
      value:state.AddReducer.count,
      site_config:state.InitReducer.site_config,
      navs:state.InitReducer.navs,
  }
}

export function add(){
  return(dispatch)=>{
    dispatch(Add())
  }
}

export function initsite(){
  return(dispatch)=>{
    getSiteInfo(dispatch,Init_Site)
  }
}