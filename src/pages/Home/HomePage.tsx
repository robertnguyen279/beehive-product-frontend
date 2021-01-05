import React from 'react';
// import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import HeaderHome from './Header';
import LoginContainer from './LoginContainer';

function HomePage(): React.ReactElement {
  // const { t } = useTranslation('HomePage');
  const isLaptop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <React.Fragment>
      <div className="home__container min-h-screen min-w-full relative">
        <HeaderHome isLaptop={isLaptop} />
        <LoginContainer isLaptop={isLaptop} />
        <div className="home__layer--dark absolute w-full h-full inset-0"></div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
