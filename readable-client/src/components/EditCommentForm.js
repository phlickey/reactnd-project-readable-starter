import React, {Component} from 'react';
import {connect} from 'react-redux';

import { editCommentCreator } from '../actions/editComment';
import {setEditCommentModalCreator} from '../actions/setEditCommentModal';
import DateMeta from './DateMeta';

class EditCommentForm extends Component{
    constructor(){
        super();
        this.state = {
            body: '',
            author: '',
            timestamp: '',
            id: '',
            parentId: ''
        }
    }
    componentDidMount(){
        let {setEditCommentModalState, comments, commentBeingEdited} = this.props;
        let comment = comments.filter(c=>c.id===commentBeingEdited)[0];
        this.setState({
            ...comment
        });
    }
    render(){
        let {setEditCommentModalState, editComment} = this.props;
        let {body, author, timestamp, id, parentId} = this.state;
        
        return(
            <div className='edit-comment-form'>
                <button onClick={()=>{
                    setEditCommentModalState({open: false, id: null});
                }}>X</button>
                <label>Comment<textarea value={this.state.body} onChange={(e)=>{
                    this.setState({
                        body: e.target.value
                    })
                }} /></label>
                <button onClick={()=>{
                    editComment({
                        id: id,
                        body: body,
                        timestamp: (new Date()).getTime()
                    });
                    setEditCommentModalState({open: false, id: null});
                }}> Submit </button>
                <DateMeta author={author} timestamp={timestamp} />
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    editCommentModalOpen: state.uiState.editCommentModalOpen,
    commentBeingEdited: state.uiState.commentBeingEdited,
    comments: state.comments
})
const mapDispatchToProps= (dispatch)=>({
    setEditCommentModalState: ({open, id}) => dispatch(setEditCommentModalCreator({open, id})),
    editComment: ({id, timestamp, body}) => dispatch(editCommentCreator({id, timestamp, body}))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditCommentForm);