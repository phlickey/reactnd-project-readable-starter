import {getPosts, getPostsByCategory} from '../utils'
const GET_POSTS = 'GET_POSTS';
const getPostsAction = ()=>{
    return (dispatch)=>{
        getPosts().then(posts=>{
            dispatch({
                type: GET_POSTS, 
                payload: posts
            })
        })
    }
};

const getPostsByCategoryAction = (category) => {
    return (dispatch)=>{
        getPostsByCategory(category).then(posts=>{
            dispatch({
                type: GET_POSTS, 
                payload: posts
            })
        })
    }
}
export {getPostsAction, getPostsByCategoryAction, GET_POSTS};
