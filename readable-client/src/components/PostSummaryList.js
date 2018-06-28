import React, {Component} from 'react';
import {connect} from  'react-redux';
import PostSummary from './PostSummary';

class PostSummaryList extends Component{
    render(){
        let {posts, currentlyVisibleCategory, postsSortedBy} = this.props;
        return (
        (posts.length>0)?        
            posts.sort((a,b)=>{
                return (a[postsSortedBy] < b[postsSortedBy])? 1 : -1
            })
            .map((post, idx)=>(<PostSummary post={post} key={idx}/>))
            :currentlyVisibleCategory?`No posts in category: ${currentlyVisibleCategory}`:`Nothing to see`
        )
    }
}

let mapStateToProps = (state, props) => {
    return {
        currentlyVisibleCategory: state.uiState.currentlyVisibleCategory,
        posts: state.posts,
        postsSortedBy: state.uiState.postsSortedBy
    }
}

export default connect(mapStateToProps)(PostSummaryList);
