import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ContentHeader, Content } from '../common/template'
import { Tabs, TabsContent, TabsHeader, TabHeader, TabContent } from '../common/tab'
import { selectTab } from '../common/tab/tabActions'

class BillingCycle extends React.Component {

    componentDidMount() {
        this.props.selectTab('tabList')
    }

    render() {
        return (
            <React.Fragment>
                <ContentHeader title="Ciclos de Pagamentos" subtitle="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="fa-bars" target="tabList" />
                            <TabHeader label="Incluir" icon="fa-plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="fa-pencil-alt" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="fa-trash-alt" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <h1>Listar</h1>
                            </TabContent>
                            <TabContent id="tabCreate">
                                <h1>Incluir</h1>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <h1>Alterar</h1>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <h1>Excluir</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectTab }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)