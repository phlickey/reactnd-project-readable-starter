import {deleteComment} from '../utils'

const DELETE_COMMENT = 'DELETE_COMMENT';
const deleteCommentCreator = (id) => { 
    return (dispatch) => {
        deleteComment(id).then(comment=>{
            dispatch({
                type: DELETE_COMMENT,
                payload: comment
            })
        })
    }
};

export {deleteCommentCreator, DELETE_COMMENT}
