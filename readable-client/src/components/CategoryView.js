import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getPostsAction, getPostsByCategoryAction} from '../actions/getPosts';
import {getCategoriesAction} from '../actions/getCategories';
import {setNewPostModalCreator} from '../actions/setNewPostModal';
import uuid from 'uuid/v4';
import { addPostCreator } from '../actions/addPost';
import PostList from './PostList';
import BackButton from './BackButton';
import Modal from 'react-modal';
class CategoryView extends Component {
    constructor(){
        super();
        this.state = {
            category: ''
        };
    }
    componentDidMount(){
        let { category } = this.props.match.params;
        this.setState({
            category,
        });
        if (category){
            this.props.getPostsByCategory(category)
        }else{
            this.props.getPosts()
        }
    }
    componentWillReceiveProps(newProps){
        let { category } = newProps.match.params;
        if (category && (this.state.category !== category)){
            this.setState({
                category
            });
            this.props.getPostsByCategory(category)
        }else{
            this.props.getPosts()
        }
    }

    addNewPost({title, body, author, category}){
        let {setNewPostModal, addPost} = this.props;
        let id = uuid();
        let timestamp = (new Date()).getTime();
        addPost({id, timestamp, title, body, author, category});
        setNewPostModal('closed');
    }

    render(){
        let {category} = this.state;
        let {newPostModalOpen, setNewPostModal} = this.props;
        return (
            <div className="post-list">
                {category&&(<BackButton />)}
                <PostList category={category}/>
                <button onClick={()=>{setNewPostModal('open')}}> New Post </button>
                <Modal
                    isOpen={newPostModalOpen}
                    contentLabel="New Post Modal"
                > <button onClick={()=>{setNewPostModal('closed')}}> close </button>
                <button onClick={()=>{this.addNewPost({
                    title: 'Test Post',
                    body: 'This is the body',
                    author: 'sys',
                    category: 'udacity'
                })}}>Add a testpost </button>
                </Modal>

            </div>
        );
    }
}
let mapStateToProps = (state, props) => {
    return {newPostModalOpen: state.uiState.newPostModalOpen};
};

function mapDispatchToProps(dispatch) {
    return {
      getPosts: (data) => dispatch(getPostsAction(data)),
      getCategories: (data) => dispatch(getCategoriesAction(data)),
      getPostsByCategory: (category)=> dispatch(getPostsByCategoryAction(category)),
      setNewPostModal: (state) => dispatch(setNewPostModalCreator(state)),
      addPost: (post) => dispatch(addPostCreator(post))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);