import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuTree label='Painel de Gestão' icon='dashboard'>
            <MenuItem path='/' label='Painel de Gestão V.1'/>
        </MenuTree>
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='rendimentos'
                label='Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
)








