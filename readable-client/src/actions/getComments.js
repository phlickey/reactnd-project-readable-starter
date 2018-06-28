import {getCommentsByPost} from '../utils';

const GET_COMMENTS = 'GET_COMMENTS';
const getCommentsAction = (postId)=>{
    return (dispatch)=>{
        getCommentsByPost(postId).then(comments=>{
            dispatch({ 
                type: GET_COMMENTS, 
                payload: comments
            });
        })
    }
};

export  {getCommentsAction, GET_COMMENTS};
