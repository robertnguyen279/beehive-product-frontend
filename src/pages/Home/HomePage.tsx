import React from 'react';
// import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import HeaderHome from './Header';
import LoginContainer from './LoginContainer';
import HomeSlider from './Slider';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

function HomePage(): React.ReactElement {
  // const { t } = useTranslation('HomePage');
  const openMenuSlider = useSelector((state: RootState) => state.ui.openMenuSlider);
  const isLaptop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <React.Fragment>
      <div
        className={
          openMenuSlider
            ? 'home__container--slider-active h-screen min-w-full relative'
            : 'home__container h-screen min-w-full relative'
        }
      >
        <HeaderHome />
        <LoginContainer isLaptop={isLaptop} />
        <HomeSlider />
        <div className="home__layer--dark absolute w-full h-full inset-0"></div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
