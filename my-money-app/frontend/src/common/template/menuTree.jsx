import React from 'react'
import Icon from './icon'

const MenuTree = (props) => (
    <li className="treeview">
        <a href="">
            <Icon {...props} />
            <i className="fas fa-angle-right pull-right"></i>
        </a>
        <ul className="treeview-menu">
            {props.children}
        </ul>
    </li>
)

export default MenuTree