import {getCategories} from '../utils';

const GET_CATEGORIES = 'GET_CATEGORIES';
const getCategoriesAction = (payload) => {
    return (dispatch) => {
        getCategories().then(categories=>{
            dispatch({type: GET_CATEGORIES, payload:categories});
        })
    }
}

export  {getCategoriesAction, GET_CATEGORIES};
