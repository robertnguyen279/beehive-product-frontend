import React from 'react';
import { HomeChild } from 'types/main';

const LoginContainer = ({ isLaptop }: HomeChild): React.ReactElement => {
  return isLaptop ? <div>laptop</div> : <div>mobile</div>;
};

export default LoginContainer;
