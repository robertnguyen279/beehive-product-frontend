import React from 'react';
import { HomeChild } from 'types/main';
import { useTranslation } from 'react-i18next';
import CommunityIcon from 'assets/icons/community.svg';
import OnlineShopIcon from 'assets/icons/online-shop.svg';
import JobSearchIcon from 'assets/icons/job-search.svg';
import LogoIcon from 'assets/icons/logo-icon.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, CheckBox } from 'components/Forms';
import UserIcon from 'assets/icons/user.svg';
import PasswordIcon from 'assets/icons/key.svg';

const LoginContainer = ({ isLaptop }: HomeChild): React.ReactElement => {
  const { t } = useTranslation(['HomePage', 'Common']);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t('Common:form-email-error')).required(t('Common:form-required')),
      password: Yup.string().required(t('Common:form-required')),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  const renderLeftLogin = () => (
    <div className="home__login-container__left w-1/2 h-full flex items-center justify-center">
      <div className="w-4/5 text-white">
        <div className="text-2xl font-bold font-title">{t('join-club')}</div>
        <div className="text-sm py-5">{t('join-club-description')}</div>
        <div className={`flex items-center pb-3 ${isLaptop ? 'animate__animated animate__fadeInDown' : ''}`}>
          <div className="w-12 h-12 mr-5 flex items-center justify-center border border-white rounded">
            <img src={CommunityIcon} alt="community" className="w-4/6" />
          </div>
          <div>
            <div className="font-bold text-lg font-title">{t('login-left-community')}</div>
            <div className="text-sm">{t('login-left-community-description')}</div>
          </div>
        </div>
        <div className={`flex items-center pb-3 ${isLaptop ? 'animate__animated animate__fadeInDown' : ''}`}>
          <div className="w-12 h-12 mr-5 flex items-center justify-center border border-white rounded">
            <img src={OnlineShopIcon} alt="online-shop" className="w-4/6" />
          </div>
          <div>
            <div className="font-bold text-lg font-title">{t('login-left-onlineshop')}</div>
            <div className="text-sm">{t('login-left-onlineshop-description')}</div>
          </div>
        </div>
        <div className={`flex items-center pb-3 ${isLaptop ? 'animate__animated animate__fadeInDown' : ''}`}>
          <div className="w-12 h-12 mr-5 flex items-center justify-center border border-white rounded">
            <img src={JobSearchIcon} alt="job-search" className="w-4/6" />
          </div>
          <div className="">
            <div className="font-bold text-lg font-title">{t('login-left-jobsearch')}</div>
            <div className="text-sm">{t('login-left-jobsearch-description')}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRightLogin = () => (
    <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center">
      <div className="w-16 py-3">
        <img src={LogoIcon} alt="logo-icon" />
      </div>
      <div className="text-2xl text-gray-600 font-bold font-title pb-3">{t('welcome')}</div>
      <div className="text-sm text-gray-600 pb-5">{t('join-with-people')}</div>
      <form className="w-full flex flex-col items-center justify-center">
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          type="text"
          placeholder={t('Common:form-email-placeholder')}
          name="email"
          className="mb-3 w-4/6"
          prefixIcon={UserIcon}
        />
        <Input
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          placeholder={t('Common:form-password-placeholder')}
          name="password"
          className="mb-3 w-4/6"
          prefixIcon={PasswordIcon}
        />
        <CheckBox name="Remember" value="Remember" label="Remember" className="w-4/6" />
      </form>
    </div>
  );

  return (
    <div className="home__login-container flex absolute z-10">
      {renderLeftLogin()}
      {renderRightLogin()}
    </div>
  );
};

export default LoginContainer;
