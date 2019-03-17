import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import BillingCycle from '../billingCycle'
import Dashboard from '../dashboard'

const Routes = (props) => (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from="*" to="/" />
    </Switch>
)

export default Routes