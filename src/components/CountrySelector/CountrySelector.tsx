import React from 'react';
import { Select } from 'antd';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import VietNamFlag from 'assets/icons/vietnam.svg';
import UnitedKingdomFlag from 'assets/icons/united-kingdom.svg';
import { useMediaQuery } from 'react-responsive';

const { Option } = Select;

const CountrySelector = () => {
  const { i18n } = useTranslation();
  const handleChange = (value: string): void => {
    i18n.changeLanguage(value);
  };
  const isMobile = useMediaQuery({ query: '(max-width: 575px)' });
  return (
    <Select
      defaultValue={i18next.language}
      style={
        isMobile
          ? { backgroundColor: 'transparent!important' }
          : { minWidth: '8rem', backgroundColor: 'transparent!important' }
      }
      onChange={handleChange}
    >
      <Option value="en">
        <div className="flex items-center justify-between relative">
          {!isMobile ? <div>English</div> : <div className="text-transparent w-5">.</div>}
          <img
            src={UnitedKingdomFlag}
            alt="english"
            className="w-5"
            style={
              isMobile
                ? { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
                : undefined
            }
          />
        </div>
      </Option>
      <Option value="vi">
        <div className="flex items-center justify-between relative">
          {!isMobile ? <div>Tiếng Việt</div> : <div className="text-transparent w-5">.</div>}
          <img
            src={VietNamFlag}
            alt="vietnamese"
            className="w-5 "
            style={
              isMobile
                ? { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
                : undefined
            }
          />
        </div>
      </Option>
    </Select>
  );
};

export default CountrySelector;
