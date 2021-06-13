import React from 'react';
import {connect} from 'react-redux';
const CommentList= (props)=>{
    const renderComment=()=>{
        return(
            props.comments.map(w=>{
                return <li key={w}>{w}</li>
            })
        )
    }
    return(
        <div>
            <h4>Comment List</h4>
           <ul>
               {renderComment()}
           </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {comments:state.comments}
}
export default connect(mapStateToProps)(CommentList)