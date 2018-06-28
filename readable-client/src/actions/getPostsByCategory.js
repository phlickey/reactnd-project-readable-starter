
import {getPostsByCategory} from '../utils';

const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
const getPostsByCategoryAction = (category) => {
    return (dispatch)=>{
        getPostsByCategory(category).then(posts=>{
            dispatch({
                type: GET_POSTS_BY_CATEGORY, 
                payload: posts
            })
        })
    }
}

export {getPostsByCategoryAction, GET_POSTS_BY_CATEGORY};
