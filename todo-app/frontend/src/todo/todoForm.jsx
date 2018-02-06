import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todoForm">
        <div className="col-md-11">
            <Grid cols="12 9 10" style="width: 50%;">
                <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa"/>
            </Grid>
        </div>
        <div className="col-md-1">
            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus"/>
            </Grid>
        </div>
    </div>
)