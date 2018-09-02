import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from "redux";
import { connect } from 'react-redux';
///actions
import { Init_Site } from 'Containers/Home/action';
import { Article_List } from "Containers/Posts/action";
///dispatch
import { getSiteInfo,getArticleList } from "fetchdata";
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
      article_list:state.getArticleListReducer.article_list
  }
}

function initsite(){
  return(dispatch)=>{
    getSiteInfo(dispatch,Init_Site)
  }
}

function articleList(){
  return(dispatch)=>{
    getArticleList(dispatch,Article_List)
  }
}

export default connect(mapStateToProps,{ initsite,articleList })(Routes)