import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChange } from './counterActions'

const Counter = (props) => (
    <div>
        <h1>{props.counter.number}</h1>
        <input type="number" onChange={props.stepChange} value={props.counter.step} />
        <button onClick={props.inc}>INC</button>
        <button onClick={props.dec}>DEC</button>
    </div>
)

const mapStateToProps = (state) => ({ counter: state.counter })
const mapDispatchToProps = (dispatch) => bindActionCreators({ inc, dec, stepChange }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)