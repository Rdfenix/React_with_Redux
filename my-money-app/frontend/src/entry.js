import React from 'react'
import { HashRouter } from 'react-router-dom'

export default (props) => (
    <HashRouter>
        {props.children}
    </HashRouter>
)