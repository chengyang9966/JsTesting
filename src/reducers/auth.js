import {CHANGE_AUTH} from 'actions/type';


const Auth=(state=false,action)=>{
    switch (action.type) {
        case CHANGE_AUTH:
        return action.payload;
    
        default:
            return state;
    }
}

export default Auth
