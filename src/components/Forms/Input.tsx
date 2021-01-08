import React from 'react';
import { InputType } from 'types/main';

const Input = ({
  type,
  value,
  className,
  name,
  onChange,
  prefixIcon,
  style,
  error,
  ...config
}: InputType): React.ReactElement => {
  return (
    <div className={`form__input${error ? '--error' : ''} relative ${className ? className : ''}`} style={{ ...style }}>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        {...config}
        className={`bg-gray-50 ${prefixIcon ? 'pr-5 pl-12' : 'px-5'} font-xl w-full h-10`}
      />
      <span className="relative text-sm text-red-600">{error}</span>

      {prefixIcon && (
        <div className="form__icon-prefix h-full absolute bg-white flex items-center justify-center">
          <img src={prefixIcon} alt="input-icon" className="w-1/2" />
        </div>
      )}
    </div>
  );
};

export default Input;
