import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from "redux";
import { Init_Site } from 'Containers/Home/action';
import { Article_List } from "Containers/Posts/action";
import { getSiteInfo,getArticleList } from "fetchdata";
import reducer from "reducers";

export const store = createStore(reducer,applyMiddleware(thunk))

export function mapStateToProps(state){
  return{
      site_config:state.InitReducer.site_config,
      navs:state.InitReducer.navs,
      article_list:state.getArticleListReducer.article_list
  }
}

export function initsite(){
  return(dispatch)=>{
    getSiteInfo(dispatch,Init_Site)
  }
}

export function articleList(){
  return(dispatch)=>{
    getArticleList(dispatch,Article_List)
  }
}