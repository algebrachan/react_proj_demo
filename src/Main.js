import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = lazy(() => import('./App'));
const Test = lazy(() => import('./routes/Test'))

/**
 * Suspense 加载中的页面显示
 * @returns 
 */
const Main = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/test" component={Test} />
    </Switch>
  </Suspense>
)

export default Main;