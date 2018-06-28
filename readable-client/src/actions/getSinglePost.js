import {getPostById} from '../utils';

const GET_SINGLE_POST = 'GET_SINGLE_POST';
const getSinglePostAction = (id)=>{
    return (dispatch, getState)=>{
        let posts = getState().posts;
        if (posts.map(post=>post.id === id).length>0) return;
        getPostById(id).then(post=>{
            dispatch({
                type: GET_SINGLE_POST, 
                payload: post
            })
        })
    }
};

export {getSinglePostAction, GET_SINGLE_POST};
