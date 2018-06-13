import React, { Component } from 'react';
import PostSummary from './PostSummary'
import { connect } from 'react-redux';

class PostsList extends Component {
    render(){
        let { posts } = this.props;
        let postList = [];
        for (let post in posts){
            postList.push(posts[post]);
        }
        let { category } = this.props.match.params;
        if (typeof(category)!=='undefined'){
            postList = postList.filter(post=>post.category===category);
        }
        console.log(postList);
        return (
            <div>
                {postList.map(post=>(<PostSummary post={post}/>))}
            </div>
        );
    }
}
let mapStateToProps = (state, props) => {
    return {posts: state.posts};
};
export default connect(mapStateToProps)(PostsList);