import {addComment} from '../utils';

const ADD_COMMENT = 'ADD_COMMENT';
const addCommentCreator = ({id, timestamp, body, author, parentId}) => {
    return (dispatch) => {
        addComment({id, timestamp, body, author, parentId}).then(result=>{
            dispatch({
                type: ADD_COMMENT, payload: result
            })
        })
    }
}

export  {addCommentCreator, ADD_COMMENT};
