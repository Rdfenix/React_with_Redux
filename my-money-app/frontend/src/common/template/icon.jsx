import React from 'react'

const Icon = (props) => (
    <React.Fragment>
        <i className={`fas ${props.icon}`}></i> {props.label}
    </React.Fragment>

)

export default Icon