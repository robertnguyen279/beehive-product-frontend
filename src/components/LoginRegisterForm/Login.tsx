import React from 'react';
import { Input, CheckBox } from 'components/Forms';
import UserIcon from 'assets/icons/user.svg';
import PasswordIcon from 'assets/icons/key.svg';
import Button from 'components/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginRegisterForm } from 'types';
import GoogleLogin from 'react-google-login';
import GoogleIcon from 'assets/icons/google.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { loginUser, loginByGoogle, loginByFacebook } from 'actions/users';
import { useDispatch } from 'react-redux';

const Login = ({ onChange }: LoginRegisterForm): React.ReactElement => {
  const { t } = useTranslation(['Common']);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t('Common:form-email-error')).required(t('Common:form-required')),
      password: Yup.string().required(t('Common:form-required')),
    }),
    // @ts-ignore
    onSubmit: ({ email, password, remember }) => {
      dispatch(loginUser({ email, password, remember }));
    },
  });

  const responseGoogle = (res: any): void => {
    const { familyName, givenName, imageUrl, email } = res.profileObj;
    dispatch(
      loginByGoogle({ firstName: familyName, lastName: givenName, avatar: imageUrl, email, token: res.tokenId }),
    );
  };

  const responseFacebook = (res: any): void => {
    const { name, email } = res;
    dispatch(loginByFacebook({ name, email, avatar: res.picture.data.url }));
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-center animate__animated animate__fadeInRight"
      method="POST"
      onSubmit={formik.handleSubmit}
    >
      <Input
        value={formik.values.email}
        onChange={formik.handleChange}
        type="text"
        placeholder={t('Common:form-email-placeholder')}
        name="email"
        className="mb-3 w-4/6"
        prefixIcon={UserIcon}
        error={formik.errors.email && formik.touched.email ? formik.errors.email : false}
      />
      <Input
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
        placeholder={t('Common:form-password-placeholder')}
        name="password"
        className="mb-3 w-4/6"
        prefixIcon={PasswordIcon}
        error={formik.errors.password && formik.touched.password ? formik.errors.password : false}
      />
      <div className="flex justify-between items-center w-4/6 pb-3">
        <CheckBox
          name="remember"
          value="remember"
          label={t('Common:checkbox-remember')}
          onChange={formik.handleChange}
        />
        <div className="hover-primary text-sm text-gray-600 cursor-pointer">{t('Common:form-password-lost')}</div>
      </div>
      <Button className="w-4/6 mb-2" type="submit">
        {t('Common:button-login')}
      </Button>
      <div className="flex w-4/6 justify-center items-center py-3">
        <GoogleLogin
          clientId="22234867800-4shnc1g407oks72lciep89ht3kdaeqfn.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          render={(renderProps) => (
            <img
              src={GoogleIcon}
              alt="google-auth"
              className="w-8 h-8 cursor-pointer mx-5"
              onClick={renderProps.onClick}
            />
          )}
        />
        <FacebookLogin
          appId="441079470350681"
          autoLoad={false}
          callback={responseFacebook}
          fields="name,email,picture"
          // @ts-ignore
          render={(renderProps) => (
            <img
              src={FacebookIcon}
              alt="google-auth"
              className="w-8 h-8 cursor-pointer mx-5"
              onClick={renderProps.onClick}
            />
          )}
        />
      </div>
      <div className="text-sm text-primary cursor-pointer" onClick={() => onChange()}>
        {t('Common:form-or-sign-up')}
      </div>
    </form>
  );
};

export default Login;
