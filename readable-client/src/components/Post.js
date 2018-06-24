import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackButton from './BackButton';
import PostSummary from './PostSummary';
import Comment from './Comment';
class Post extends Component {
    render(){
        let {category, postId} = this.props.match.params;
        let comments = [];
        for (let comment in this.props.comments){
            if (this.props.comments[comment].parentId === postId){
                comments.push(this.props.comments[comment]);
            }
        }
        let post = this.props.posts[postId];
        let {title, body, author, timestamp, commentCount, voteScore} = post;
        return (
            <div className="post">
                <BackButton />
                <PostSummary post={post} />
                <div className="post__content">
                    <p>{body}</p>
                </div>
                <ul className="post__comments">
                    {comments.length?
                    comments.map((comment)=>{
                        return ( <Comment comment={comment} />)
                    }):`No one's posted any comments yet!`
                }
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state, props) => ({
    posts: state.posts,
    comments: state.comments
});
export default connect(mapStateToProps)(Post);
