import React from 'react';
import Logo from 'assets/icons/white-logo.svg';
import Cart from 'assets/icons/shopping-cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuSldier } from 'actions/ui';
import { RootState } from 'reducers';
import CountrySelector from 'components/CountrySelector';

const HeaderHome = (): React.ReactElement => {
  const dispatch = useDispatch();
  const openMenuSlider = useSelector((state: RootState) => state.ui.openMenuSlider);

  const handleToggleMenuSlider = (): void => {
    dispatch(toggleMenuSldier());
  };

  const setBarClassName = (bar: number): string => {
    if (openMenuSlider === undefined) {
      return `home__header__right__slider-button__bar-${bar}`;
    } else if (openMenuSlider === false) {
      return `home__header__right__slider-button__bar-${bar}--inactive`;
    } else {
      return `home__header__right__slider-button__bar-${bar}--active`;
    }
  };

  return (
    <div
      className={`home__header z-10 relative xl:h-32 lg:h-24 h-20 m-auto flex justify-between items-center md:py-7 py-5`}
      id="login-header"
    >
      <div className="home__header__logo w-52 px-5 cursor-pointer">
        <img src={Logo} alt="logo" />
      </div>
      <div className="home__header__right flex items-center text-white text-base justify-start mr-4">
        <div className="home__header__right__cart w-8 bg-gray-600 h-8 flex justify-center items-center cursor-pointer">
          <img src={Cart} alt="shopping-cart" className="w-4/6" />
        </div>
        <div className="home__header__right__login mx-4 cursor-pointer">
          <CountrySelector />
        </div>
        <div className="home__header__right__slider-button cursor-pointer relative" onClick={handleToggleMenuSlider}>
          <div className={setBarClassName(1)}>
            <span>.</span>
          </div>
          <div className={setBarClassName(2)}>
            <span>.</span>
          </div>
          <div className={setBarClassName(3)}>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
