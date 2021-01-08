import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('HomePage');
  return (
    <div className="home__footer relative z-10 py-5 text-white text-sm flex justify-center">
      <div className="px-3 cursor-pointer md:pt-16">{t('footer-link-home')}</div>
      <div className="px-3 cursor-pointer md:pt-16">{t('footer-link-aboutus')}</div>
      <div className="px-3 cursor-pointer md:pt-16">{t('footer-link-faqs')}</div>
      <div className="px-3 cursor-pointer md:pt-16">{t('footer-link-blog')}</div>
      <div className="px-3 cursor-pointer md:pt-16">{t('footer-link-contact')}</div>
    </div>
  );
};

export default Footer;
