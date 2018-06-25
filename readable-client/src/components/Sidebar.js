import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import { connect } from 'react-redux';
class Sidebar extends Component {
    render(){
        let { categories } = this.props;
        return(
            <ul className="sidebar">
                <SidebarItem title='Home' path='/' />
                <SidebarItem title="Categories" />
                {categories.map((category, idx)=><SidebarItem key={idx} title={category.name} path={'/'+category.path} />)}
            </ul>
        );
    }
}

let mapStateToProps = (state, props)=>({
    categories: state.categories
});
export default connect(mapStateToProps)(Sidebar);