import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setEditPostModalCreator} from '../actions/setEditPostModal';
import {editPostCreator} from '../actions/editPost';

class EditPostForm extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            body: '',
            author: '',
            category: ''
        }
        console.log(this.state);
    }
    componentDidMount(){
        let postBeingEdited = this.props.postBeingEdited;
        let post = this.props.posts.filter(post=>post.id===postBeingEdited)[0];
        console.log(JSON.stringify(post))
        let {title,body,author,category} = post;
        this.setState({
           ...post
        })
    }
    editPost({id, title, body}){
        let {setEditPostModal, editPost} = this.props;
        let timestamp = (new Date()).getTime();
        editPost({id, title, body});
        setEditPostModal('closed');
    }

    render(){
        let {postBeingEdited} = this.props;
        let {title, body, author, category} = this.state;
        return(
            <div className="edit-post-form">
                <button onClick={()=>{this.props.setEditPostModal('closed')}} > X </button>
                <label>Title
                    <input type="text" name="title" value={title} onChange={(e)=>{
                        this.setState({
                            title: e.target.value
                        })
                    }}/>
                </label>   
                <label>Post
                    <textarea name="body" value={body} onChange={(e)=>{
                        this.setState({
                            body: e.target.value
                        })
                    }} />
                </label>
                <sub> posted by {author} in {category} </sub>
                <button onClick={()=>{this.editPost({
                    id: postBeingEdited, 
                    title, 
                    body})}}> Submit </button>
            </div>
        )
    }
}

const mapStateToProps = (state, props)=>({
    categories: state.categories,
    postBeingEdited: state.uiState.postBeingEdited,
    posts: state.posts
});
const mapDispatchToProps = (dispatch)=>({
    setEditPostModal: (state) => dispatch(setEditPostModalCreator(state)),
    editPost: ({id, title, body}) => dispatch(editPostCreator({id, title, body}))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);
