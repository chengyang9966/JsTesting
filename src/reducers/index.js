import {combineReducers} from 'redux';
import comment from 'reducers/comment';
import AuthReducer from 'reducers/auth';

const  CombineReducers=combineReducers({
    comments:comment,
    auth:AuthReducer
})

export {CombineReducers as default}