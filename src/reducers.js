import InitReducer from "Containers/Home/reducer";
import getArticleListReducer from 'Containers/Posts/reducer';
import { combineReducers } from "redux";

export default combineReducers({
    InitReducer,
    getArticleListReducer
})