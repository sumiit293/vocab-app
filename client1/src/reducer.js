import { combineReducers } from 'redux';
import wordListReducer from './component/home/reducer';
const reducer = {
    wordListReducer
};
export const rootReducer = combineReducers(reducer);