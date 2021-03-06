import commentsReducer from 'reducers/comment';
import {SAVE_COMMENT} from 'actions/type';

test('handle action of type SAVE_COMMENT',()=>{
    const action={
        type:SAVE_COMMENT,
        payload:'New Comment'
    }
    const newState=commentsReducer([],action);
expect(newState).toEqual(['New Comment'])
})
test('handle action with unkown type',()=>{
    const newState=commentsReducer([],{});
    expect(newState).toEqual([])
})