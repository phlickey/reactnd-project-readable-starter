import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4'

import {addCommentCreator} from '../actions/addComment';

class AddCommentForm extends Component{
    constructor(){
        super();
        this.state = {
            author: '',
            body: ''
        }
    }

    render(){
        let {author, body} = this.state;
        let {postId, addComment}= this.props;
        return(
            <div className="post__add-comment">
                <p> Add Comment </p>
                <label>Username:<input onChange={(e)=>{
                    this.setState({
                        author: e.target.value
                    })
                }} value={author} /></label>
                <label>Comment:<textarea onChange={(e)=>{
                    this.setState({
                        body: e.target.value
                    })
                }} value={body}/></label>
                <button onClick={()=>{
                    addComment({
                        id: uuid(),
                        timestamp: (new Date()).getTime(),
                        body: body,
                        author: author,
                        parentId: postId
                    });
                    this.setState({
                        author: '',
                        body: ''
                    });
                }}>Post</button>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => dispatch(addCommentCreator(comment))
    }
}

export default connect(null, mapDispatchToProps)(AddCommentForm);
