import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Icon } from '../template'
import { selectTab } from './tabActions'

class TabHeader extends React.Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        return (
            <li className={selected ? 'active' : ''}>
                <a href="javascript:void(0);" onClick={() => this.props.selectTab(this.props.target)} data-toggle='tab' data-target={this.props.target}>
                    <Icon icon={this.props.icon} label={this.props.label} />
                </a>
            </li>
        )
    }
}

const mapStateToProps = (state) => ({ tab: state.tab })
const mapDispatchToProps = (dispach) => bindActionCreators({ selectTab }, dispach)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)