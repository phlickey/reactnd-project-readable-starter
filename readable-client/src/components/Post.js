import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import {getSinglePostAction} from '../actions/getSinglePost';
import {getCommentsAction} from '../actions/getComments';
import {addCommentCreator} from '../actions/addComment';

import AddCommentForm from './AddCommentForm'
import BackButton from './BackButton';
import EditCommentForm from './EditCommentForm';
import PostSummary from './PostSummary';
import Comment from './Comment';

class Post extends Component {
    componentWillMount(){
        Modal.setAppElement('#root');
    }
    
    componentDidMount(){
        let {postId} = this.props.match.params;
        this.props.getSinglePost(postId);
        this.props.getComments(postId);
    }

    render(){
        let {postId} = this.props.match.params;
        let {editCommentModalOpen} = this.props;
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

                    <AddCommentForm postId={postId}/>

                    <ul className="post__comments">
                        {comments.length?
                        comments.sort((a,b)=>b.voteScore - a.voteScore)
                        .map((comment, idx)=>{
                            return ( <Comment key={idx} comment={comment} />)
                        }):`No one's posted any comments yet!`
                    }
                    </ul>
                    <Modal
                        isOpen={editCommentModalOpen}
                        contentLabel="Edit Comment Modal"
                    >
                            <EditCommentForm />
                    </Modal>
                </div>
            ):'Post not found'
        )
    }
}

let mapStateToProps = (state, props) => ({
    posts: state.posts,
    comments: state.comments,
    editCommentModalOpen: state.uiState.editCommentModalOpen
});
let mapDispatchToProps = (dispatch) => {
    return {
        getSinglePost: (post) => dispatch(getSinglePostAction(post)),
        getComments: (comments) => dispatch(getCommentsAction(comments)),
        addComment: (comment) => dispatch(addCommentCreator(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
