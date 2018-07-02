import React, {Component} from 'react';
import { connect } from 'react-redux';

import {voteCommentCreator} from '../actions/voteComment';
import {deleteCommentCreator} from '../actions/deleteComment';
import {setEditCommentModalCreator} from '../actions/setEditCommentModal';

import DateMeta from './DateMeta';

class Comment extends Component{
    upVote(id){
        this.props.vote({id, vote:'upVote'});
    }

    downVote(id){
        this.props.vote({id, vote:'downVote'});
    }

    render(){
        let {comment, deleteComment, setEditCommentModalState} = this.props;
        let {body, author, timestamp, voteScore, id}= comment;

        return(
            <li>
                <p>{body}</p>
                <DateMeta timestamp={timestamp} author={author} />
                <p> Score : {voteScore} </p>
                <button onClick={()=>{
                    setEditCommentModalState({open: true, id});
                }}> Edit </button>
                <button onClick={()=>{deleteComment(id);}}> Delete </button>
                <button onClick={()=>this.upVote(id)}> Upvote </button>
                <button onClick={()=>this.downVote(id)}> DownVote </button>
            </li>
        )
    }
}
let mapDispatchToProps = (dispatch)=>({
    vote: ({id, vote}) => dispatch(voteCommentCreator({id, vote})),
    deleteComment: (id) => dispatch(deleteCommentCreator(id)),
    setEditCommentModalState: ({open, id}) => dispatch(setEditCommentModalCreator({open, id})),
})

export default connect(null, mapDispatchToProps)(Comment);
