'use client';

import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';
import { ReactNode, useEffect, useState } from 'react';
import { classNames } from '@/utils/functions';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { FaArrowLeft } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [showMain, setShowMain] = useState(false);
  const [classnames, setClassName] = useState('');
  const [classNames2, setClassName2] = useState('');
  const screenWidth = useScreenWidth();
  const pathname = usePathname();
  const paths = pathname.split('/');

  useEffect(() => {
    console.log('entered', screenWidth);
    const updatedClassName =
      screenWidth < 768 && !showMain ? 'block' : 'hidden md:block';
    const updatedClassName2 =
      screenWidth < 768 && showMain ? 'block' : 'hidden md:block';
    setClassName(updatedClassName);
    setClassName2(updatedClassName2);
    console.log({ updatedClassName, updatedClassName2 });
  }, [screenWidth, showMain]);

  // useEffect(() => {
  //   if (screenWidth < 768) {
  //     setShowMain(false);
  //   }
  // }, [screenWidth]);

  return (
    <>
      <Header setShowMain={setShowMain} showMain={showMain} />
      <main>
        <div className={classnames}>
          <SideBar callback={setShowMain} mobile={screenWidth} />
        </div>
        <div
          className={classNames(
            classNames2,
            'md:ml-72 relative min-h-[calc(100dvh-64.67px)] mt-0 bg-white'
          )}
        >
          {showMain && (
            <button
              onClick={() => setShowMain(!showMain)}
              className="px-[2.1875rem] flex gap-[0.44rem] items-center md:hidden font-bold text-2xl pt-[2.125rem] capitalize"
            >
              <FaArrowLeft />
              {paths[1]}
            </button>
          )}
          {children}
        </div>
      </main>
    </>
  );
};

export default AppLayout;
