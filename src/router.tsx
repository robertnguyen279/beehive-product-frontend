import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import LoadingSreen from 'components/LoadingScreen';

const HomePage = lazy(() => import('pages/Home'));
const Activities = lazy(() => import('pages/Activities'));

export default (
  <Suspense fallback={<LoadingSreen />}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/activities" component={Activities} />
    </Switch>
  </Suspense>
);
