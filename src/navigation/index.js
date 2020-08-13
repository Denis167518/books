import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {Home, Account, Basket} from '../pages';
import * as rout from '../constants/routs';
import {MainHeader} from '../components';

const Navigation = () => (
  <Router>
    <MainHeader/>
    <Switch>
      <Route exact path={rout.HOME} component={Home}/>
      <Route path={rout.MY_ACCOUNT} component={Account}/>
      <Route path={rout.BASKET} component={Basket}/>
    </Switch>
  </Router>
)

export default Navigation;
