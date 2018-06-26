import React, {Component} from 'react';
import { connect } from 'react-redux';
import {voteCommentCreator} from '../actions/voteComment';
class Comment extends Component{
    upVote(id){
        this.props.vote({id, vote:'upVote'});
    }

    downVote(id){
        this.props.vote({id, vote:'downVote'});
    }

    render(){
        let {body, author, timestamp, voteScore, id}= this.props.comment;

        return(
            <li>
                <p>{body}</p>
                <sub> Posted by {author} at {new Date(timestamp).toString()} </sub>
                <p> Score : {voteScore} </p>
                <button onClick={()=>this.upVote(id)}> Upvote </button>
                <button onClick={()=>this.downVote(id)}> DownVote </button>
            </li>
        )
    }
}
let mapDispatchToProps = (dispatch)=>({
    vote: ({id, vote}) => dispatch(voteCommentCreator({id, vote}))
})
export default connect(null, mapDispatchToProps)(Comment);