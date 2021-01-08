import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderHome from './Header';
import LoginContainer from './LoginContainer';
import HomeSlider from './Slider';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'reducers';
import { toggleMenuSldier } from 'actions/ui';
import Footer from './Footer';
import BackgroundImg from 'assets/imgs/login-background.jpg';

function HomePage(): React.ReactElement {
  const openMenuSlider = useSelector((state: RootState) => state.ui.openMenuSlider);
  const isLaptop = useMediaQuery({ query: '(min-width: 768px)' });
  const dispatch = useDispatch();

  const handleToggleMenuSlider = (): void => {
    dispatch(toggleMenuSldier());
  };

  return (
    <div
      className={`home__container${openMenuSlider ? '--slider-active' : ''} h-screen min-w-full relative`}
      style={{ background: `url('${BackgroundImg}')` }}
    >
      <HeaderHome />
      <LoginContainer isLaptop={isLaptop} />
      <HomeSlider />
      <Footer />
      <div className="home__layer absolute w-full h-20 md:h-full inset-0"></div>
      {openMenuSlider && (
        <div
          className="home__layer-2 absolute w-full h-full inset-0 z-20 cursor-pointer"
          onClick={handleToggleMenuSlider}
        ></div>
      )}
    </div>
  );
}

export default HomePage;
