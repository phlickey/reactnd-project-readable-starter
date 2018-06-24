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
        return (
            <div>
                {(postList.length>0)?
                postList.map((post, idx)=>(<PostSummary post={post} key={idx}/>)):
                `No posts in category: ${category}`
            }
            </div>
        );
    }
}
let mapStateToProps = (state, props) => {
    return {posts: state.posts};
};
export default connect(mapStateToProps)(PostsList);