import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import Rendimento from '../rendimento/rendimento'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={ Dashboard } />
            <Route path='/rendimentos' component={ Rendimento } />
            <Redirect from='*' to='/' />
        </Switch>

    </div>
)