import React from 'react';
import { useTranslation } from 'react-i18next';
import { Collapse } from 'antd';
import PlusIcon from 'assets/icons/plus.svg';

const { Panel } = Collapse;

const HomeSlider = () => {
  const { t } = useTranslation('HomePage');
  return (
    <div className="home__slider z-10 absolute p-10 overflow-y-scroll overflow-hidden max-h-screen">
      <div className="text-xl font-bold text-gray-600">{t('slider-mainmenu')}</div>
      <hr className="my-5" />
      <div className="text-sm cursor-pointer hover-primary py-3 text-primary">{t('footer-link-home')}</div>
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={() => <img src={PlusIcon} alt="plus-icon" className="w-5 h-5"></img>}
      >
        <Panel
          header={<div className="text-sm cursor-pointer hover-primary text-gray-900">{t('slider-network')}</div>}
          key="1"
        >
          <div className="collapse__items border-gray-300 p-3">
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-network-activity')}</div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-network-photos')}</div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-network-videos')}</div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-network-members')}</div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-network-groups')}</div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-network-forums')}</div>
          </div>
        </Panel>
        <Panel
          header={<div className="text-sm cursor-pointer hover-primary text-gray-900">{t('slider-product')}</div>}
          key="2"
        >
          <div className="collapse__items border-gray-300 p-3">
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-product-all')}</div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">
              {t('slider-product-categories')}
            </div>
          </div>
        </Panel>
        <Panel
          header={<div className="text-sm cursor-pointer hover-primary text-gray-900">{t('slider-jobs')}</div>}
          key="4"
        >
          <div className="collapse__items border-gray-300 p-3">
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-jobs-all')}</div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-jobs-categories')}</div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-jobs-submit')}</div>
          </div>
        </Panel>
        <Panel
          header={<div className="text-sm cursor-pointer hover-primary text-gray-900">{t('slider-classifields')}</div>}
          key="5"
        >
          <div className="collapse__items border-gray-300 p-3">
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">{t('slider-classifield-all')}</div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">
              {t('slider-classifield-categories')}
            </div>
            <div className="p-3 text-sm text-gray-900 hover-primary cursor-pointer">
              {t('slider-classifield-submit')}
            </div>
          </div>
        </Panel>
      </Collapse>
      <div className="text-sm cursor-pointer hover-primary text-gray-900 py-3">{t('footer-link-aboutus')}</div>
      <div className="text-sm cursor-pointer hover-primary text-gray-900 py-3">{t('footer-link-faqs')}</div>
      <div className="text-sm cursor-pointer hover-primary text-gray-900 py-3">{t('footer-link-blog')}</div>
      <div className="text-sm cursor-pointer hover-primary text-gray-900 py-3">{t('footer-link-contact')}</div>
    </div>
  );
};

export default HomeSlider;
