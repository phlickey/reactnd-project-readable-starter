import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import {getPostsAction} from '../actions/getPosts';
import {getPostsByCategoryAction} from '../actions/getPostsByCategory';
import {getCategoriesAction} from '../actions/getCategories';
import {setCurrentlyVisibleCategoryCreator} from '../actions/setCurrentlyVisibleCategory';
import {setNewPostModalCreator} from '../actions/setNewPostModal';
import {setPostsSortedByCreator} from '../actions/setPostsSortedBy';

import PostSummaryList from './PostSummaryList';
import BackButton from './BackButton';
import PostListsSort from './PostListsSort';
import PostListHeader from './PostListHeader';

class CategoryView extends Component {
    componentDidMount(){
        let { category } = this.props.match.params;
        let {getPosts, getPostsByCategory} = this.props;
        this.props.setCurrentlyVisibleCategory(category);
        if (typeof(category)==='undefined'){
            getPosts();
        }else{
            getPostsByCategory(category);
        }
    }

    componentWillReceiveProps(newProps){
        let { category } = newProps.match.params;
        this.props.setCurrentlyVisibleCategory(category);
        if (typeof(category)==='undefined'){
            this.props.getPosts();
        }else{
            this.props.getPostsByCategory(category);
        }
    }

    render(){
        let {setNewPostModal, currentlyVisibleCategory, setPostsSortedBy} = this.props;
        return (
            <div className="post-list">
                {currentlyVisibleCategory&&(<BackButton />)}
                <PostListHeader />
                <PostListsSort />   
                <PostSummaryList/>
                <button onClick={()=>{setNewPostModal({open: true})}}> New Post </button>
            </div>
        );
    }
}

let mapStateToProps = (state, props) => ({
    newPostModalOpen: state.uiState.newPostModalOpen,
    currentlyVisibleCategory: state.uiState.currentlyVisibleCategory
});
function mapDispatchToProps(dispatch) {
    return {
      getPosts: (data) => dispatch(getPostsAction(data)),
      getCategories: (data) => dispatch(getCategoriesAction(data)),
      getPostsByCategory: (category)=> dispatch(getPostsByCategoryAction(category)),
      setNewPostModal: (modalState) => dispatch(setNewPostModalCreator(modalState)),
      setCurrentlyVisibleCategory: (category) => dispatch(setCurrentlyVisibleCategoryCreator(category)),
      setPostsSortedBy: (sort) => dispatch(setPostsSortedByCreator(sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);
