import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BackButton from './BackButton';
class Post extends Component {
    render(){
        let {category, postId} = this.props.match.params;
        let post = this.props.posts[postId];
        let {title, body, author, timestamp, commentCount, voteScore} = post;
        return (
            <div className="post">
                <Link to={`/${category}/${postId}`}> <h1>{ title }</h1> </Link>
                <BackButton />
                <p>{ body }</p>
                <p>Score: {voteScore} </p>
                <p>{ commentCount } { (commentCount > 1) ? 'comments' : 'comment'} </p>
                <sub>Posted by: { author } at { timestamp }</sub>
                <button>Edit</button>
                <button>Delete</button>
                <div>

                </div>
            </div>
        )
    }
}

let mapStateToProps = (state, props) => ({
    posts: state.posts,
    comments: state.comments
});
export default connect(mapStateToProps)(Post);
