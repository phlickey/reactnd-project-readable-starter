import {deletePost} from '../utils';
const DELETE_POST = 'DELETE_POST';
const deletePostCreator = (id)=>{
    return (dispatch, getState)=>{
        deletePost(id).then(post=>{
            dispatch({
                type: DELETE_POST,
                payload: post
            })
        })
    }
}

export {deletePostCreator, DELETE_POST};
