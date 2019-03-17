import React from 'react';
import { Grid } from '../layout'
import { Icon } from '../template'

const ValueBox = (props) => (
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className="inner">
                <h3>{props.value}</h3>
                <p>{props.text}</p>
                <div className="icon">
                    <Icon icon={props.icon} />
                </div>
            </div>
        </div>
    </Grid>
)

export default ValueBox