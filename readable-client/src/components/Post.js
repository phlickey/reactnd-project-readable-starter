import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getSinglePostAction} from '../actions/getSinglePost';
import {getCommentsAction} from '../actions/getComments';

import BackButton from './BackButton';
import PostSummary from './PostSummary';
import Comment from './Comment';

class Post extends Component {
    componentDidMount(){
        let {postId} = this.props.match.params;
        this.props.getSinglePost(postId);
        this.props.getComments(postId);
    }

    render(){
        let {postId} = this.postId || this.props.match.params;
        let comments = [];
        for (let comment in this.props.comments){
            if (this.props.comments[comment].parentId === postId){
                comments.push(this.props.comments[comment]);
            }
        }
        let post = this.props.posts.filter(post=>post.id === postId)[0];
        let {body} = post || {body:''};
        return (
            post?(
                <div className="post">
                <BackButton />
                <PostSummary post={post} />
                <div className="post__content">
                    <p>{body}</p>
                </div>
                <ul className="post__comments">
                    {comments.length?
                    comments.sort((a,b)=>b.voteScore - a.voteScore)
                    .map((comment, idx)=>{
                        return ( <Comment key={idx} comment={comment} />)
                    }):`No one's posted any comments yet!`
                }
                </ul>
                </div>
            ):'Post not found'
        )
    }
}

let mapStateToProps = (state, props) => ({
    posts: state.posts,
    comments: state.comments
});
let mapDispatchToProps = (dispatch) => {
    return {
        getSinglePost: (post) => dispatch(getSinglePostAction(post)),
        getComments: (comments) => dispatch(getCommentsAction(comments))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
