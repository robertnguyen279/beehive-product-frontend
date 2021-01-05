import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { BodyContentLoader } from 'components/ContentLoader';

const HomePage = lazy(() => import('pages/Home'));

export default (
  <Fragment>
    <Suspense fallback={<BodyContentLoader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Suspense>
  </Fragment>
);
