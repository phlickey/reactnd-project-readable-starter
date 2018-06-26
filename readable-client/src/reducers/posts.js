import {ADD_POST} from '../actions/addPost';
import {EDIT_POST} from '../actions/editPost';
import {DELETE_POST} from '../actions/deletePost';
import {GET_POSTS} from '../actions/getPosts';
import { GET_SINGLE_POST } from '../actions/getSinglePost';

export default function postsReducer(state = [], action){
    switch(action.type){
        case ADD_POST:
            return state;
        case EDIT_POST:
            return state;
        case DELETE_POST:
            let posts = [...state];
            return posts.filter(post=>post.id !== action.payload.id);
        case GET_POSTS:
            return [...action.payload];
        case GET_SINGLE_POST:
            return [...state.filter(post=>post.id!==action.payload.id), action.payload]
        default:
            return state;
    }
}

