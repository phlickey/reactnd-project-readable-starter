import React, {Component} from 'react';
import {connect} from 'react-redux';

import { setPostsSortedByCreator } from '../actions/setPostsSortedBy';

class PostListSort extends Component{
    render(){
        let {setPostsSortedBy, postsSortedBy} = this.props;
        return (
            <div>
                <label> Sort by:
                    <select onChange={(e)=>{
                        setPostsSortedBy(e.target.value)
                    }} value={postsSortedBy}>
                        <option value='voteScore'> Score </option>
                        <option value='timestamp'> Date </option>
                        <option value='commentCount'> Number of Comments </option>
                    </select>
                </label> 
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    postsSortedBy: state.uiState.postsSortedBy
});
let mapDispatchToProps = (dispatch) => ({
    setPostsSortedBy: (sort) => dispatch(setPostsSortedByCreator(sort))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListSort);
