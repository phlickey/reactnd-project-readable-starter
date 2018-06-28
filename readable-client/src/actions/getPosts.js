import {getPosts} from '../utils';

const GET_ALL_POSTS = 'GET_ALL_POSTS';
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

export {getPostsAction, GET_ALL_POSTS};
