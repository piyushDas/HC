import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HCLogin from './components/HCLogin'
import HCSeller from './containers/HCSeller'
import HCBuyer from './containers/HCBuyer'

const router = props => (
  <React.Fragment>
    <Switch>
      <Route exact={true} path="/" component={HCLogin} />
      <Route exact={true} path="/buyer" component={HCBuyer} />
      <Route exact={true} path="/seller" component={HCSeller} />
      {/* <Route path="*" component={PageNotFound} /> */}
    </Switch>
  </React.Fragment>
)

export default router
