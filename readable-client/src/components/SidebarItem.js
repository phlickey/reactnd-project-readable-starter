import React from 'react';
import { Link } from 'react-router-dom';

let SidebarItem = function(props){
    let {title, path} = props;
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

export default SidebarItem;
