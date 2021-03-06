import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import byCep from './pages/byCep';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/cep/" component={byCep} />
        </Switch>
    </BrowserRouter>
);

export default Routes;