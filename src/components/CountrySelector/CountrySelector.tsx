import React from 'react';
import { Select } from 'antd';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import VietNamFlag from 'assets/icons/vietnam.svg';
import UnitedKingdomFlag from 'assets/icons/united-kingdom.svg';
const { Option } = Select;

const CountrySelector = () => {
  const { i18n } = useTranslation();
  const handleChange = (value: string): void => {
    i18n.changeLanguage(value);
  };
  return (
    <Select
      defaultValue={i18next.language}
      style={{ minWidth: '8rem', backgroundColor: 'transparent!important' }}
      onChange={handleChange}
    >
      <Option value="en">
        <div className="flex items-center justify-between">
          <div>English</div>
          <img src={UnitedKingdomFlag} alt="english" className="w-5" />
        </div>
      </Option>
      <Option value="vi">
        <div className="flex items-center justify-between">
          <div>Tiếng Việt</div>
          <img src={VietNamFlag} alt="vietnamese" className="w-5" />
        </div>
      </Option>
    </Select>
  );
};

export default CountrySelector;
