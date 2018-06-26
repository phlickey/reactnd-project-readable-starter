import {ADD_COMMENT} from '../actions/addComment';
import {GET_COMMENTS} from '../actions/getComments';
import {VOTE_COMMENT} from '../actions/voteComment';
export default function commentsReducer(state = [], action){
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
        case VOTE_COMMENT:
            let comments = [...state];
            return comments.filter(comment=>comment.id!==action.payload.id).concat(action.payload);
        default:
            return state;
    }
};