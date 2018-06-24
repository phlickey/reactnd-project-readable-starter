import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PostSummary extends Component {
    deletePost(){

    }

    editPost(){

    }

    upVote(){

    }

    downVote(){

    }
    render(){
        let {title, author, timestamp, commentCount, voteScore, category, id} = this.props.post;
        return (
            <div className="post-summary">
                <Link to={`/${category}/${id}`}> 
                    <h1>{ title }</h1> 
                </Link>
                <p>Score: {voteScore} </p>
                {commentCount?(
                    <p>{ commentCount } { (commentCount > 1) ? 'comments' : 'comment'} </p>
                ):'No Comments'}
                <br />
                <sub>Posted by: { author } at { new Date(timestamp).toString() }</sub>
                <button onClick={()=>{this.editPost(id)}}>Edit</button>
                <button onClick={()=>{this.deletePost(id)}}>Delete</button>
                <button onClick={()=>{this.upVote(id)}}>Up Vote</button>
                <button onClick={()=>{this.downVote(id)}}>Down Vote</button>
            </div>
        )
    }
}

export default PostSummary;