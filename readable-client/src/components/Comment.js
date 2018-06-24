import React, {Component} from 'react';

class Comment extends Component{
    upVote(){

    }

    downVote(){

    }

    render(){
        let comment = this.props.comment;
        return(
            <li>
                <p>{comment.body}</p>
                <sub> Posted by {comment.author} at {new Date(comment.timestamp).toString()} </sub>
                <p> Score : {comment.voteScore} </p>
                <button onClick={()=>this.upVote()}> Upvote </button>
                <button onClick={()=>this.downVote()}> DownVote </button>
            </li>
        )
    }
}

export default Comment;