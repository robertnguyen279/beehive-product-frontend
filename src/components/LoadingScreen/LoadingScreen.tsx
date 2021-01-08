import React from 'react';
import Loading from 'components/Loading';

const LoadingScreen = () => {
  return (
    <div className="absolute h-screen inset-0 w-screen flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default LoadingScreen;
