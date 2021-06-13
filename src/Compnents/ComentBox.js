import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions'
import RequireAuth from 'Compnents/requireAuth'
const CommentBox=(props)=>{
    const [comment,SetComment]=useState('')
    const handleChange=(e)=>{
        const{value}=e.target

        SetComment(value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.SaveComment(comment);
        SetComment('')
    }


    return(
        <div>

        <form onSubmit={handleSubmit}> 
            <h4>Add a Comment</h4>
            <textarea  value={comment} onChange={e=>handleChange(e)}/>
            <div>
                <button>Submit Comment</button>
                
               
            </div>
        </form>
            <button className='fetchComments'onClick={props.FetchComment}>Fetch Comment</button>
        </div>

    )
}



export default connect(null,actions)(CommentBox);