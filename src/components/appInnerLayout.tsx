'use client';

import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';
import { ReactNode, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { classNames } from '@/utils/functions';

const AppInnerLayout = ({
  sidebar,
  children,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) => {
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
          {/* <SideBar callback={setShowMain} mobile={isMobile} /> */}
          <div className="w-full md:w-96 min-h-screen flex-1 fixed top-0 md:border-r border-primary-30 pt-14">
            {' '}
            {sidebar}
          </div>
        </div>
        <div
          className={classNames(
            classNames2,
            'md:ml-96 relative min-h-[calc(100dvh-64.67px)] mt-0'
          )}
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default AppInnerLayout;
