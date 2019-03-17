import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

const Menu = (props) => (
    <ul className="sidebar-menu">
        <MenuItem path='#/' label="Dashboard" icon="fa-tachometer-alt"/>
        <MenuTree label="Cadastro" icon="fa-edit">
            <MenuItem path="#/billingCycles" label="Ciclos de pagamento" icon="fa-money-bill-wave-alt"  />
        </MenuTree>
    </ul>
)

export default Menu