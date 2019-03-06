import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { search, add, changeDescription, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    keyHandler(e) {
        //extrai de um objeto um conjunto de atributos
        const { add, clear, search, description } = this.props // destructure
        if(e.key == 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if(e.key == 'Escape') {
            clear()
        }
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        //extrai de um objeto um conjunto de atributos
        const { add, search, description } = this.props // destructure
        return (
            <div role="form" className="todoForm">
                    <Grid cols="12 9 10" style="width: 50%;">
                        <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa" 
                        value={this.props.description} onChange={this.props.changeDescription} onKeyUp={this.keyHandler} />
                    </Grid>
                    <Grid cols="12 3 2">
                        <IconButton style="primary" icon="plus" onClick={() => add(description)} />
                        <IconButton style="info" icon="search" onClick={search} />
                        <IconButton style="default" icon="close" onClick={this.props.clear} />
                    </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ description: state.todo.description })
const mapDispatchToProps = (dispatch) => bindActionCreators({ search, add, changeDescription, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)