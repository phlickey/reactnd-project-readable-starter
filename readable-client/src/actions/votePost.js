import {voteOnPost} from '../utils';

const VOTE_POST = 'VOTE_POST';
const votePostCreator = ({id, vote})=>{
    return (dispatch)=>{
        voteOnPost({id, vote}).then(post=>{
            dispatch({ 
                type: VOTE_POST, 
                payload: post 
            });
        })
    }
}

export {votePostCreator, VOTE_POST};
