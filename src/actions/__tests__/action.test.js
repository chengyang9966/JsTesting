
import {SAVE_COMMENT} from 'actions/type';
import {SaveComment} from 'actions';

describe('save Comment', () => {
    test('has correct type',()=>{
        const action=SaveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    })
    test('has correct payload',()=>{
        const action=SaveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    })
})
