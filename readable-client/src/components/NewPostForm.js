import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';

import {setNewPostModalCreator} from '../actions/setNewPostModal';
import {addPostCreator} from '../actions/addPost';

class NewPostForm extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            body: '',
            author: '',
            category: ''
        }
    }

    addNewPost({title, body, author, category}){
        if (title.length && body.length && author.length && typeof(category)!== 'undefined'){
            let {setNewPostModal, addPost} = this.props;
            let id = uuid();
            let timestamp = (new Date()).getTime();
            addPost({id, timestamp, title, body, author, category});
            setNewPostModal('closed');
        }
    }

    render(){
        let {categories, currentlyVisibleCategory} = this.props;
        let {title, body, author, category} = this.state;
        category = category || currentlyVisibleCategory || categories[0].path;
        return(
            <div className="new-post-form">
                <button onClick={()=>{this.props.setNewPostModal({open: false})}} > X </button>
                <label>Title
                    <input type="text" name="title" onChange={(e)=>{this.setState({
                        title: e.target.value
                    })}}/>
                </label> 
                <label>User Name 
                    <input type="text" name="author" onChange={(e)=>{this.setState({
                        author: e.target.value
                    })}}/>    
                </label> 
                <label>Post
                    <textarea name="body" onChange={(e)=>{this.setState({
                        body: e.target.value
                    })}}/>
                </label> 
                <label>Category 
                <select name="category" value={category} defaultValue={currentlyVisibleCategory} onChange={(e)=>{this.setState({
                        category: e.target.value
                    })}}>
                    {categories.map((cat, idx)=>(
                        <option key={idx} name={cat.path} value={cat.path} selected={false}> {JSON.stringify(cat.name)} </option>
                    ))}
                </select>
                </label>
                <button onClick={()=>{this.addNewPost({title, body, author, category})}}> Submit </button>
            </div>
        )
    }
}

const mapStateToProps = (state, props)=>({
    categories: state.categories,
    currentlyVisibleCategory: state.uiState.currentlyVisibleCategory
});
const mapDispatchToProps = (dispatch)=>({
    setNewPostModal: (state) => dispatch(setNewPostModalCreator(state)),
    addPost: (post) => dispatch(addPostCreator(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);
