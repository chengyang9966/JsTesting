import React from 'react';
import {shallow} from 'enzyme';
import App from 'Compnents/App';
import CommentBox from 'Compnents/ComentBox';
import CommentList from 'Compnents/CommentList'

let component;
beforeEach(()=>{
     component=shallow(<App/>)
})

it('Show a comment box',()=>{

    expect(component.find(CommentBox).length).toEqual(1);
})
it('Show Comment List',()=>{
    expect(component.find(CommentList).length).toEqual(1);
})