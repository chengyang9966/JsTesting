import {SAVE_COMMENT,FETCH_COMMENTS} from 'actions/type';


export default (state=[],action)=>{
    switch (action.type) {
        case SAVE_COMMENT:
        return [...state,action.payload];

        case FETCH_COMMENTS:
          const Comment=  action.payload.data.map(w=>w.name)

          return [...state,...Comment];

        default:
            return state;

    }
}