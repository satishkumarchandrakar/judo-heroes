'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout.jsx';
import IndexPage from './components/IndexPage.jsx';
import AthletePage from './components/AthletePage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="athlete/:id" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
