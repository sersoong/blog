import InitReducer from "Containers/Home/reducer";
import getArticleListReducer from 'Containers/Posts/reducer';
import getArticleReducer from 'Containers/Post/reducer';
import { combineReducers } from "redux";

export default combineReducers({
    InitReducer,
    getArticleListReducer,
    getArticleReducer
})