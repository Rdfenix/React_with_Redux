import React from 'react'
import Icon from './icon'

const MenuItem = (props) => (
    <li>
        <a href={props.path}>
            <Icon {...props} />
        </a>
    </li>
)

export default MenuItem