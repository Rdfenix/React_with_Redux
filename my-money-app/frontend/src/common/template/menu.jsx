import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default (props) => (
    <ul className="sidebar-menu">
        <MenuItem path="#" label="Dashboard" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#billingCycles" icon="usd" label="Ciclos de Pagamentos" />
        </MenuTree>
    </ul>
)