import {addPost} from '../utils';
const ADD_POST = 'ADD_POST';
const addPostCreator = ({id, timestamp, title, body, author, category})=>{
    return (dispatch)=>{
        addPost({id, timestamp, title, body, author, category}).then(post=>{
            dispatch({ 
                type: ADD_POST, 
                payload: post
            })
        });
    }
}


(payload) => ({ type: ADD_POST, payload });

export  {addPostCreator, ADD_POST};
