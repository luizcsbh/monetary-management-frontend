import React from 'react'
import { Router, Route, IndexRouter, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import Rendimento from '../rendimento/rendimento'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRouter component={Dashboard} />
            <Route path='rendimentos' component={Rendimento}/>
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)