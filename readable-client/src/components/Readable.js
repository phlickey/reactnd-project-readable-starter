import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect }from 'react-redux';
import Modal from 'react-modal';

import { getCategoriesAction } from '../actions/getCategories';

import Sidebar from './Sidebar';
import PostsList from './PostList';
import Post  from './Post';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';

class Readable extends Component{
    componentDidMount(){
        this.props.getCategoriesDispatch();
    }
    render(){
        let {newPostModalOpen, editPostModalOpen} = this.props;
        return (
            <Router>
                <div className="readable">
                <Sidebar />
                <Route exact path="/" component={PostsList} />
                <Route exact path="/:category" component={PostsList} />
                <Route exact path="/:category/:postId" component={Post} />
                <Modal
                    isOpen={newPostModalOpen}
                    contentLabel="New Post Modal"
                >
                        <NewPostForm />
                </Modal>
                <Modal
                    isOpen={editPostModalOpen}
                    contentLabel="Edit Post Modal"
                >
                        <EditPostForm />
                </Modal>
                </div>
            </Router>
        )
    }
}

let mapStateToProps = (state, props) =>({
    newPostModalOpen: state.uiState.newPostModalOpen,
    editPostModalOpen: state.uiState.editPostModalOpen
})

let mapDispatchToProps = (dispatch) =>{
    return {
        getCategoriesDispatch: (categories) => dispatch(getCategoriesAction(categories))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Readable);
