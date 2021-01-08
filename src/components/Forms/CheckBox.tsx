import React from 'react';
import { v4 as uuid } from 'uuid';
import { CheckBoxType } from 'types/main';

const CheckBox = ({ name, value, label, className, onChange }: CheckBoxType): React.ReactElement => {
  const id = name + uuid();
  return (
    <div className={`form__checkbox flex items-center ${className ? className : ''}`}>
      <input type="checkbox" name={name} value={value} id={id} className="z-10" onChange={onChange} />
      <span className="form__checkbox__checkmark">.</span>
      <label htmlFor={id} className="pl-3 cursor-pointer text-sm text-gray-600">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
