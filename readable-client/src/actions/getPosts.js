import {getPosts, getPostsByCategory} from '../utils'
const GET_ALL_POSTS = 'GET_ALL_POSTS';
const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
const getPostsAction = ()=>{
    return (dispatch)=>{
        getPosts().then(posts=>{
            dispatch({
                type: GET_ALL_POSTS, 
                payload: posts
            })
        })
    }
};

const getPostsByCategoryAction = (category) => {
    return (dispatch)=>{
        getPostsByCategory(category).then(posts=>{
            dispatch({
                type: GET_POSTS_BY_CATEGORY, 
                payload: posts
            })
        })
    }
}
export {getPostsAction, getPostsByCategoryAction, GET_ALL_POSTS, GET_POSTS_BY_CATEGORY};
