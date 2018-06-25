import React, {Component} from 'react';
import PostSummary from './PostSummary';
import {connect} from  'react-redux';
class PostList extends Component{
    render(){
        let {posts, category} = this.props;
        return (
        (posts.length>0)?        
            posts.sort((a,b)=>b.voteScore-a.voteScore)
            .map((post, idx)=>(<PostSummary post={post} key={idx}/>))
            :`No posts in category: ${category}`
        )
    }
}

let mapStateToProps = (state, props) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(PostList);