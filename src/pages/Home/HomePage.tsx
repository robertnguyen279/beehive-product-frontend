import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage(): React.ReactElement {
  const { t } = useTranslation('HomePage');
  return <div className="text-xl text-yellow-700 animate__animated animate__bounce">{t('welcome')}</div>;
}

export default HomePage;
