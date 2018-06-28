import {ADD_COMMENT} from '../actions/addComment';
import {GET_COMMENTS} from '../actions/getComments';
import {VOTE_COMMENT} from '../actions/voteComment';
import {DELETE_COMMENT} from '../actions/deleteComment';
import {EDIT_COMMENT} from '../actions/editComment';
export default function commentsReducer(state = [], action){
    let comments = [...state];
    switch (action.type){
        case ADD_COMMENT:
        case VOTE_COMMENT:
        case EDIT_COMMENT:
            return comments.filter(comment=>comment.id!==action.payload.id).concat(action.payload);
        case GET_COMMENTS:
            return action.payload
        case DELETE_COMMENT:
            return comments.filter(comment=>comment.id!==action.payload.id)
        default:
            return comments;
    }
};