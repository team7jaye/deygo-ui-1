'use client';

import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';
import { ReactNode, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { classNames } from '@/utils/functions';

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <Header setShowMain={setShowMain} showMain={showMain} />
      <main>
        <div className={isMobile && !showMain ? 'block' : 'hidden md:block'}>
          <SideBar callback={setShowMain} mobile={isMobile} />
        </div>
        <div
          className={classNames(
            isMobile && showMain ? 'block' : 'hidden md:block',
            'md:ml-72'
          )}
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default AppLayout;
