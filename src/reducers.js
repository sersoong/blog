import InitReducer from "Containers/Home/reducer";
import AddReducer from 'AddReducer';
import { combineReducers } from "redux";

export default combineReducers({
    InitReducer,
    AddReducer
})