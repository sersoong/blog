import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from "redux";
import { Init_Site } from 'Containers/Home/action';

import { getSiteInfo } from "fetchdata";
import reducer from "reducers";

export const store = createStore(reducer,applyMiddleware(thunk))

export function mapStateToProps(state){
  return{
      site_config:state.InitReducer.site_config,
      navs:state.InitReducer.navs,
  }
}

export function initsite(){
  return(dispatch)=>{
    getSiteInfo(dispatch,Init_Site)
  }
}