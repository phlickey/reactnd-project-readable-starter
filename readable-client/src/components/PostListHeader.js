import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostListHeader extends Component{
    render(){
        let {currentlyVisibleCategory} = this.props;
        return (
            <div>
                {!currentlyVisibleCategory?(
                    <h1>All posts</h1>
                ):(
                    <h1>All posts in {currentlyVisibleCategory}</h1>
                )}
            </div>
        )
    }
}

let mapStateToProps = (state)=>({
    currentlyVisibleCategory: state.uiState.currentlyVisibleCategory
});

export default connect(mapStateToProps)(PostListHeader);
