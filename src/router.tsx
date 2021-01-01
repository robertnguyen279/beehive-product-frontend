import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { BodyContentLoader, FooterContentLoader, HeaderContentLoader } from 'components/ContentLoader';
import Footer from 'components/Footer';
import Header from 'components/Header';

const HomePage = lazy(() => import('pages/Home'));

export default (
  <Fragment>
    <Suspense fallback={<HeaderContentLoader />}>
      <Header />
    </Suspense>
    <Suspense fallback={<BodyContentLoader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Suspense>
    <Suspense fallback={<FooterContentLoader />}>
      <Footer />
    </Suspense>
  </Fragment>
);
