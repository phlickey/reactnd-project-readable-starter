import {voteOnComment} from '../utils';
const VOTE_COMMENT = 'VOTE_COMMENT';
const voteCommentCreator = ({id, vote}) =>{
    return (dispatch) => {
        voteOnComment({id, vote}).then(payload=>{
            dispatch({
                type: VOTE_COMMENT,
                payload
            })
        })
    }
};

export {voteCommentCreator, VOTE_COMMENT};
