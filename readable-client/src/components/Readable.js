import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import PostsList from './CategoryView';
import Post  from './Post';
import { connect }from 'react-redux';
import { getCategoriesAction } from '../actions/getCategories';
import {getCategories} from '../utils';
class Readable extends Component{
    componentDidMount(){
        getCategories()
            .then(categories=>{
                this.props.getCategoriesDispatch(categories)
            })
    }
    render(){
        return (
            <Router>
                <div className="readable">
                <Sidebar />
                <Route exact path="/" component={PostsList} />
                <Route exact path="/:category" component={PostsList} />
                <Route exact path="/:category/:postId" component={Post} />
                </div>
            </Router>
        )
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        getCategoriesDispatch: (categories) => dispatch(getCategoriesAction(categories))
    }
}
export default connect(null, mapDispatchToProps)(Readable);