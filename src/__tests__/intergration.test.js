import React from 'react';
import Root from 'root';
import {mount} from 'enzyme';
import App from 'Compnents/App';
import Moxios from 'moxios'

beforeEach(()=>{
    Moxios.install();
    Moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status:200,
        response:[
            {
            name:"asdasddasdad",
        },
            {
            name:"212qwe",
        },
    ]
    })
})
afterEach(()=>{
    Moxios.uninstall()
})
test('fetch a list of comments and display them', (done) => {
    const component=mount(
        <Root>
            <App/>
        </Root>
    )

    component.find('.fetchComments').simulate('click');
    Moxios.wait(()=>{
        component.update();
        expect(component.find('li').length).toEqual(2);
        done();
    })
})
