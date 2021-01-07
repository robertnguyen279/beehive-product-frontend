import React from 'react';
import { Input, CheckBox } from 'components/Forms';
import UserIcon from 'assets/icons/user.svg';
import PasswordIcon from 'assets/icons/key.svg';
import Button from 'components/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const { t } = useTranslation(['Common']);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t('Common:form-email-error')).required(t('Common:form-required')),
      password: Yup.string().required(t('Common:form-required')),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <form className="w-full flex flex-col items-center justify-center" method="POST" onSubmit={formik.handleSubmit}>
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
        <CheckBox name="Remember" value="Remember" label="Remember" onChange={formik.handleChange} />
        <div className="hover-primary text-sm text-gray-600 cursor-pointer">{t('Common:form-password-lost')}</div>
      </div>
      <Button className="w-4/6 mb-2" type="submit">
        {t('Common:button-login')}
      </Button>
      <div className="text-sm text-primary cursor-pointer">{t('Common:form-or-sign-up')}</div>;
    </form>
  );
};

export default Login;
