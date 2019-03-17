import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardAction'
import { ContentHeader, Content } from '../common/template'
import ValueBox from '../common/widget'
import { Row } from '../common/layout'

class Dashboard extends React.Component {

    componentDidMount(){
        this.props.getSummary()
    }

    render() {
        const { summary: { credit, debt } } = this.props
        const finalValue = credit - debt
        return (
            <React.Fragment>
                <ContentHeader title="Dashboard" subtitle="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols={[12, 4]} color="green" icon="fa-university" value={`R$ ${credit}`} text="Total de creditos" />
                        <ValueBox cols={[12, 4]} color="red" icon="fa-credit-card" value={`R$ ${debt}`} text="Total de debitos" />
                        <ValueBox cols={[12, 4]} color="blue" icon="fa-money-bill-alt" value={`R$ ${finalValue}`} text="Valor consolidado" />
                    </Row>
                </Content>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({ summary: state.dashboard.summary })
const mapDispathToProps = (dispatch) => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(Dashboard)