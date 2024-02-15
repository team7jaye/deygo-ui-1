'use client';

import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';
import { ReactNode, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { classNames } from '@/utils/functions';

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [showMain, setShowMain] = useState(false);
  const [classnames, setClassName] = useState('');
  const [classNames2, setClassName2] = useState('');

  useEffect(() => {
    const updatedClassName =
      isMobile && !showMain ? 'block' : 'hidden md:block';
    const updatedClassName2 =
      isMobile && showMain ? 'block' : 'hidden md:block';
    setClassName(updatedClassName);
    setClassName2(updatedClassName2);
  }, [isMobile, showMain]);

  useEffect(() => {
    setShowMain(false);
  }, [isMobile]);

  return (
    <>
      <Header setShowMain={setShowMain} showMain={showMain} />
      <main>
        <div className={classnames}>
          <SideBar callback={setShowMain} mobile={isMobile} />
        </div>
        <div
          className={classNames(
            classNames2,
            'md:ml-72 relative min-h-[calc(100dvh-64.67px)] mt-0'
          )}
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default AppLayout;
