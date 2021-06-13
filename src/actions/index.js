import {SAVE_COMMENT,FETCH_COMMENTS,CHANGE_AUTH} from 'actions/type';
import axios from 'axios'

const SaveComment=(comment)=>{
    return{
        type:SAVE_COMMENT,
        payload:comment
    }
}

const ChangeAuth=(isLoggedIn)=>{
    return{
        type:CHANGE_AUTH,
        payload:isLoggedIn
    }
}

const FetchComment=()=>{
const respone=axios.get('http://jsonplaceholder.typicode.com/comments')
return{
    type:FETCH_COMMENTS,
    payload:respone
}
}

export {SaveComment,FetchComment,ChangeAuth}