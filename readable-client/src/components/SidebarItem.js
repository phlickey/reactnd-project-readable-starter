import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SidebarItem extends Component {
    render(){
        let {title, path} = this.props;
        return (((typeof(path)!=='undefined')?
                (<Link to={ path }>
                    <li className='sidebar__sidebarItem'>
                        { title }
                    </li>
                </Link>):
                (<li className='sidebar__sidebarItem'>
                { title }
                </li>)
        ))
    }
}

export default SidebarItem;