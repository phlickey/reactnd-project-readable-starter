import {ADD_COMMENT} from '../actions/addComment';
import {GET_COMMENTS} from '../actions/getComments';
export default function commentsReducer(state = {}, action){
    switch (action.type){
        case ADD_COMMENT:
            return (
                {
                    ...state,
                    [action.payload.parentID]: action.payload
                }
            )
        case GET_COMMENTS:
            return action.payload
        default:
            return state;
    }
};