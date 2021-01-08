import React from 'react';
import Login from './Login';
import Register from './Register';

const LoginRegisterForm = (): React.ReactElement => {
  const [isLogin, setLogin] = React.useState(true);

  return isLogin ? (
    <Login
      onChange={() => {
        setLogin(false);
      }}
    />
  ) : (
    <Register
      onChange={() => {
        setLogin(true);
      }}
    />
  );
};

export default LoginRegisterForm;
