import React from 'react';
import Login from './Login';
import Register from './Register';

const LoginRegisterForm = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  console.log(setIsLogin);

  return isLogin ? <Login /> : <Register />;
};

export default LoginRegisterForm;
