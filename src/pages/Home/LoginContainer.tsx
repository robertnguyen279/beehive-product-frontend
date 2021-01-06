import React from 'react';
import { HomeChild } from 'types/main';
import { useTranslation } from 'react-i18next';
import CommunityIcon from 'public/icons/community.svg';
import OnlineShopIcon from 'public/icons/online-shop.svg';
import JobSearchIcon from 'public/icons/job-search.svg';

const LoginContainer = ({ isLaptop }: HomeChild): React.ReactElement => {
  const { t } = useTranslation('HomePage');
  return isLaptop ? (
    <div className="home__login-container flex absolute z-10">
      <div className="home__login-container__left w-1/2 h-full flex items-center justify-center">
        <div className="home__login-container__left__content w-4/5 text-white">
          <div className="home__login-container__left__content__title text-2xl  font-bold">{t('join-club')}</div>
          <div className="home__login-container__left__content__title-description text-sm py-5">
            {t('join-club-description')}
          </div>
          <div className="home__login-container__left__content__item-container flex items-center pb-3">
            <div className="home__login-container__left__content__item-container__left w-12 h-12 mr-5 flex items-center justify-center border border-white rounded">
              <img src={CommunityIcon} alt="community" className="w-4/6" />
            </div>
            <div className="home__login-container__left__content__item-container__right">
              <div className="home__login-container__left__content__item-container__right__title font-bold text-lg">
                {t('login-left-community')}
              </div>
              <div className="home__login-container__left__content__item-container__right__description text-sm">
                {t('login-left-community-description')}
              </div>
            </div>
          </div>
          <div className="home__login-container__left__content__item-container flex items-center pb-3">
            <div className="home__login-container__left__content__item-container__left w-12 h-12 mr-5 flex items-center justify-center border border-white rounded">
              <img src={OnlineShopIcon} alt="online-shop" className="w-4/6" />
            </div>
            <div className="home__login-container__left__content__item-container__right">
              <div className="home__login-container__left__content__item-container__right__title font-bold text-lg">
                {t('login-left-onlineshop')}
              </div>
              <div className="home__login-container__left__content__item-container__right__description text-sm">
                {t('login-left-onlineshop-description')}
              </div>
            </div>
          </div>
          <div className="home__login-container__left__content__item-container flex items-center pb-3">
            <div className="home__login-container__left__content__item-container__left w-12 h-12 mr-5 flex items-center justify-center border border-white rounded">
              <img src={JobSearchIcon} alt="job-search" className="w-4/6" />
            </div>
            <div className="home__login-container__left__content__item-container__right">
              <div className="home__login-container__left__content__item-container__right__title font-bold text-lg">
                {t('login-left-jobsearch')}
              </div>
              <div className="home__login-container__left__content__item-container__right__description text-sm">
                {t('login-left-jobsearch-description')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__login-container__right w-1/2 h-full bg-white">right</div>
    </div>
  ) : (
    <div>mobile</div>
  );
};

export default LoginContainer;
