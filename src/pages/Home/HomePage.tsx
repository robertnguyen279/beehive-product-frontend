import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage(): React.ReactElement {
  const { t } = useTranslation('HomePage');
  return <div>{t('welcome')}</div>;
}

export default HomePage;
