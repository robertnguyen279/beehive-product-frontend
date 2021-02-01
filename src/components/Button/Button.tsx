import React from 'react';
import { ButtonType } from 'types';

const Button = ({ className, children, onClick, isLoading, type, ...config }: ButtonType): React.ReactElement => {
  return (
    <button
      className={`button${isLoading ? '--loading' : ''} text-sm text-white cursor-pointer ${
        className ? className : ''
      }`}
      onClick={onClick}
      type={type}
      {...config}
    >
      {children}
    </button>
  );
};

export default Button;
