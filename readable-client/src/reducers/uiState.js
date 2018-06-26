import {SET_NEW_POST_MODAL} from '../actions/setNewPostModal';
const defaultState = {
    newPostModalOpen: false,
    editPostModalOpen: false,
    loadingComments: false,
    loadingPosts: false,
    loadingCategoryies: false
};
export default function uiState(state = defaultState, action){
    let oldState = {...state};
    switch(action.type){
        case SET_NEW_POST_MODAL:
            return {...oldState, newPostModalOpen: action.payload==='open'?true:false};
        default:
            return state;
    }
}
