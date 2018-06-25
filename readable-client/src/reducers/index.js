import posts from './posts';
import comments from './comments';
import categories from './categories';
import { combineReducers } from 'redux';
export default combineReducers({posts, categories, comments})