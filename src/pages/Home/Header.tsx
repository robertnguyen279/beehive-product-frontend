import React from 'react';
import { HomeChild } from 'types/main';
import Logo from 'public/icons/white-logo.svg';
import Cart from 'public/icons/shopping-cart.svg';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuSldier } from 'actions/ui';
import { RootState } from 'reducers';

const HeaderHome = ({ isLaptop }: HomeChild): React.ReactElement => {
  const { t } = useTranslation('HomePage');
  const dispatch = useDispatch();
  const openMenuSlider = useSelector((state: RootState) => state.ui.openMenuSlider);

  const handleToggleMenuSlider = (): void => {
    dispatch(toggleMenuSldier());
  };

  console.log(openMenuSlider);

  const setBarClassName = (bar: number): string => {
    if (openMenuSlider === undefined) {
      return `home__header__right__slider-button__bar-${bar}`;
    } else if (openMenuSlider === false) {
      return `home__header__right__slider-button__bar-${bar}--inactive`;
    } else {
      return `home__header__right__slider-button__bar-${bar}--active`;
    }
  };

  return isLaptop ? (
    <div className="home__header z-10 relative xl:h-32 lg:h-24 md:h-20 m-auto flex justify-between items-center">
      <div className="home__header__logo">
        <img src={Logo} alt="logo" className="w-30" />
      </div>
      <div className="home__header__right flex items-center text-white text-base justify-start">
        <div className="home__header__right__cart w-8 bg-gray-600 h-8 flex justify-center items-center cursor-pointer">
          <img src={Cart} alt="shopping-cart" className="w-4/6" />
        </div>
        <div className="home__header__right__login mx-4">{t('login-button')}</div>
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
  ) : (
    <div>mobile</div>
  );
};

export default HeaderHome;
