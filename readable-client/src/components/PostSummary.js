import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PostSummary extends Component {
    render(){
        let {title, body, author, timestamp, commentCount, voteScore, category, id} = this.props.post;
        return (
            <li>
                <Link to={`/${category}/${id}`}> <h1>{ title }</h1> </Link>
                <p>{ body }</p>
                <p>Score: {voteScore} </p>
                <p>{ commentCount } { (commentCount > 1) ? 'comments' : 'comment'} </p>
                <sub>Posted by: { author } at { timestamp }</sub>
                <button>Edit</button>
                <button>Delete</button>
            </li>
        )
    }
}

export default PostSummary;