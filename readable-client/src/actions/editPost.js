import {editPost} from '../utils';

const EDIT_POST = 'EDIT_POST';
const editPostCreator = ({id, title, body}) => {
    return (dispatch)=>{
        editPost({id, title, body}).then((res)=>{
            dispatch({
                type: EDIT_POST, payload: res
            })
        })
    }
}

export  {editPostCreator, EDIT_POST};
