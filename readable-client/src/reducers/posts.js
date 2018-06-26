import {ADD_POST} from '../actions/addPost';
import {EDIT_POST} from '../actions/editPost';
import {DELETE_POST} from '../actions/deletePost';
import {GET_ALL_POSTS, GET_POSTS_BY_CATEGORY} from '../actions/getPosts';
import {GET_SINGLE_POST} from '../actions/getSinglePost';
import {VOTE_POST}  from '../actions/votePost';

export default function postsReducer(state = [], action){
    let posts = [...state];
    switch(action.type){
        case ADD_POST:
            return posts.concat(action.payload)
        case EDIT_POST:
            return state;
        case DELETE_POST:
            return posts.filter(post=>post.id !== action.payload.id);
        case GET_ALL_POSTS:
            return [...action.payload];
        case GET_POSTS_BY_CATEGORY:
            return [...action.payload];
        case GET_SINGLE_POST:
            return [...state.filter(post=>post.id!==action.payload.id), action.payload]
        case VOTE_POST:
            return posts.filter(post=>post.id!==action.payload.id).concat(action.payload);
        default:
            return state;
    }
}

