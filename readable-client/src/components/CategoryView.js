import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getPosts, getPostsBycategory}  from '../utils';
import {getPostsAction} from '../actions/getPosts';
import {getCategoriesAction} from '../actions/getCategories';
import PostList from './PostList';
import BackButton from './BackButton';
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
            category
        });
        if (category){
            getPostsBycategory(category)
                .then(posts=>{
                    this.props.getPosts(posts);
                })
        }else{
            getPosts().then(posts=>{
                this.props.getPosts(posts);
            });
        }
    }
    componentWillReceiveProps(newProps){
        let {category} = newProps.match.params;
        if (category){
            this.setState({
                category
            });
            getPostsBycategory(category)
            .then(posts=>{
                this.props.getPosts(posts);
            });
        }else{
            getPosts().then(posts=>{
                this.props.getPosts(posts);
            });
        }
        
    }
    render(){
        let {category} = this.state;
        return (
            <div className="post-list">
                {category&&(<BackButton />)}
                <PostList category={category}/>
            </div>
        );
    }
}
let mapStateToProps = (state, props) => {
    return {posts: state.posts};
};

function mapDispatchToProps(dispatch) {
    return {
      getPosts: (data) => dispatch(getPostsAction(data)),
      getCategories: (data) => dispatch(getCategoriesAction(data))
    }
  }
export default connect(null, mapDispatchToProps)(CategoryView);