import React from 'react';
import CommentBox from 'Compnents/ComentBox';
import Root from'root'
import {mount} from 'enzyme'
let component;
beforeEach(()=>{
     component=mount(
     <Root>
         <CommentBox/>
     </Root>
     );
})
afterEach(()=>{
     component.unmount();
})
    describe('Comment Box', () => {
        it('has a textarea ',()=>{       
            expect(component.find('textarea').length).toEqual(1)
           
        })
        it('has a button ',()=>{
            expect(component.find('button').length).toBeGreaterThanOrEqual(1)
           
        })
        describe('The textarea', () => {
            beforeEach(()=>{
                component.find('textarea').simulate('change',{target:{value:'new Comment'}})
                component.update()
            })
            
            it('has a textarea that users can type in',()=>{
                expect(component.find('textarea').prop('value')).toEqual('new Comment')
            })
            
            it('has a textarea that users can type in and clear it out',()=>{
                // Change text  
                expect(component.find('textarea').prop('value')).toEqual('new Comment');
                // Submit 
               component.find('form').simulate('submit');
               component.update();
               expect(component.find('textarea').prop('value')).toEqual('');
            })
        })
        
    })
    

