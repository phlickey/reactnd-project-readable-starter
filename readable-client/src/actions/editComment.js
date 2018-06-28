import {editComment} from '../utils'

const EDIT_COMMENT = 'EDIT_COMMENT';
const editCommentCreator = ({id, timestamp, body}) => {
    return (dispatch)=>{
        editComment({id, timestamp, body}).then(res=>{
            console.log(res);
            dispatch({
                type: EDIT_COMMENT,
                payload: res
            })
        })
    }
}

export {editCommentCreator, EDIT_COMMENT};
