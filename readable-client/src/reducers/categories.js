import {GET_CATEGORIES} from '../actions/getCategories';
export default function categoriesReducer(state = [], action){
    switch(action.type){
        case GET_CATEGORIES:
            return action.payload.categories;
        default:
            return state;
    }
}