import React from 'react';
import {mount} from 'enzyme';
import Root from 'root';
import CommentList from 'Compnents/CommentList';

let components;
beforeEach(()=>{
    let initalState={
        comments:['Comment 1','Comment 2']
    }
    components=mount(
        <Root initalState={initalState}>
            <CommentList/>
        </Root>
    )
})

test('creates one alis per comment', () => {
    expect(components.find('li').length).toEqual(2)
})

test('all comment should be visible ', () => {
 expect(components.render().text()).toContain('Comment 1')
 expect(components.render().text()).toContain('Comment 2')
})

