import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from "redux";
import { connect } from 'react-redux';
///actions
import { Init_Site } from 'Containers/Home/action';
import { Article_List } from "Containers/Posts/action";
import { Article } from "Containers/Post/action";
///dispatch
import { getSiteInfo,getArticleList,getArticle } from "fetchdata";
///reducer
import reducer from "reducers";
///routes
import Routes from 'routes';

///store
export const store = createStore(reducer,applyMiddleware(thunk))

function mapStateToProps(state){
  return{
      site_config:state.InitReducer.site_config,
      navs:state.InitReducer.navs,
      article_list:state.getArticleListReducer.article_list,
      article:state.getArticleReducer.article
  }
}

function initsite(){
  return(dispatch)=>{
    getSiteInfo(dispatch,Init_Site)
  }
}

function get_ArticleList(){
  return(dispatch)=>{
    getArticleList(dispatch,Article_List)
  }
}

function get_Article(){
  return(dispatch)=>{
    getArticle(dispatch,Article)
  }
}

export default connect(mapStateToProps,{ initsite,get_ArticleList,get_Article })(Routes)