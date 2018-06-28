import {SET_NEW_POST_MODAL} from '../actions/setNewPostModal';
import {SET_EDIT_POST_MODAL} from '../actions/setEditPostModal';
import {SET_CURRENTLY_VISIBLE_CATEGORY} from '../actions/setCurrentlyVisibleCategory';
import {SET_POSTS_SORTED_BY} from '../actions/setPostsSortedBy';
const defaultState = {
    newPostModalOpen: false,
    editPostModalOpen: false,
    loadingComments: false,
    loadingPosts: false,
    loadingCategoryies: false,
    postBeingEdited: null,
    currentlyVisibleCategory: null,
    postsSortedBy: 'voteScore'
};
export default function uiState(state = defaultState, action){
    let oldState = {...state};
    switch(action.type){
        case SET_CURRENTLY_VISIBLE_CATEGORY:
            return {
                ...oldState,
                currentlyVisibleCategory: action.payload
            }
        case SET_NEW_POST_MODAL:
            return {...oldState, newPostModalOpen: action.payload.open};
        case SET_EDIT_POST_MODAL:
            return {
                ...oldState,
                editPostModalOpen: action.payload.open,
                postBeingEdited: action.payload.id
            }
        case SET_POSTS_SORTED_BY:
            return {
                ...oldState,
                postsSortedBy: action.payload.sort
            }
        default:
            return state;
    }
}
