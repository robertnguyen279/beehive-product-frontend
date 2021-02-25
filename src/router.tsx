import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import LoadingSreen from 'components/LoadingScreen';
import MainLayout from 'components/MainLayout';

const HomePage = lazy(() => import('pages/Home'));
const Activities = lazy(() => import('pages/Activities'));

export default (
  <Suspense fallback={<LoadingSreen />}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <MainLayout>
        <Route exact path="/activities" component={Activities} />
      </MainLayout>
    </Switch>
  </Suspense>
);
