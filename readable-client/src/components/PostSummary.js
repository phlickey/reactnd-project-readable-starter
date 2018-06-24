import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PostSummary extends Component {
    deletePost(){

    }

    editPost(){

    }

    render(){
        let {title, body, author, timestamp, commentCount, voteScore, category, id} = this.props.post;
        return (
            <li>
                <Link to={`/${category}/${id}`}> <h1>{ title }</h1> </Link>
                <p>{ body }</p>
                <p>Score: {voteScore} </p>
                {commentCount?(
                    <p>{ commentCount } { (commentCount > 1) ? 'comments' : 'comment'} </p>
                ):'No Comments to show '}
                <br />
                <sub>Posted by: { author } at { new Date(timestamp).toString() }</sub>
                <button onClick={()=>{this.editPost(id)}}>Edit</button>
                <button onClick={()=>{this.deletePost(id)}}>Delete</button>
            </li>
        )
    }
}

export default PostSummary;