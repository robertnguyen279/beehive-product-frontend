import React from 'react';
import { Input } from 'components/Forms';
import UserIcon from 'assets/icons/user.svg';
import PasswordIcon from 'assets/icons/key.svg';
import Button from 'components/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginRegisterForm } from 'types/main';

const Register = ({ onChange }: LoginRegisterForm): React.ReactElement => {
  const { t } = useTranslation(['Common']);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t('Common:form-email-error')).required(t('Common:form-required')),
      password: Yup.string().required(t('Common:form-required')),
      confirmPassword: Yup.string()
        .required(t('Common:form-required'))
        .oneOf([Yup.ref('password'), null], t('Common:form-password-confirm-error')),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });
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
      <Input
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        type="password"
        placeholder={t('Common:form-password-confirm-placeholder')}
        name="confirmPassword"
        className="mb-3 w-4/6"
        prefixIcon={PasswordIcon}
        error={formik.errors.confirmPassword && formik.touched.confirmPassword ? formik.errors.confirmPassword : false}
      />
      <Button className="w-4/6 mb-2" type="submit">
        {t('Common:button-signup')}
      </Button>
      <div className="text-sm text-primary cursor-pointer" onClick={() => onChange()}>
        {t('Common:form-or-login')}
      </div>
      ;
    </form>
  );
};

export default Register;
