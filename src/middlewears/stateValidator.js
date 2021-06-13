import tv4 from 'tv4';
import StateSchema from './stateSchema';
export default ({disptach,getState})=>next=>action=>{
    next(action);
    if(!tv4.validate(getState(),StateSchema)){
        console.warn('Invalid state Schema Detected')
    }

}