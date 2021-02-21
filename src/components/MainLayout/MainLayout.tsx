import React from 'react';

import Rightlayout from './Rightlayout';
import TopLayout from './TopLayout';
import LeftLayout from './LeftLayout';

interface Props {
  children?: React.ReactNode;
}

const MainLayout = (props: Props) => {
  return (
    <div className="flex items-start">
      <LeftLayout />
      <TopLayout child={props.children} />
      <Rightlayout />
    </div>
  );
};

export default MainLayout;
