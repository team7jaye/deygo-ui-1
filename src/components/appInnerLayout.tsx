'use client';

import Header from '@/components/Header';
import { ReactNode, useLayoutEffect, useState } from 'react';
import { classNames } from '@/utils/functions';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { FaArrowLeft } from 'react-icons/fa';

const AppInnerLayout = ({
  sidebar,
  children,
  title,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  title: string;
}) => {
  const [showMain, setShowMain] = useState(false);
  const [classnames, setClassName] = useState('');
  const [classNames2, setClassName2] = useState('');
  const screenWidth = useScreenWidth();

  useLayoutEffect(() => {
    const updatedClassName =
      screenWidth < 768 && showMain ? 'block' : 'hidden md:block';
    const updatedClassName2 =
      screenWidth < 768 && !showMain ? 'block' : 'hidden md:block';
    setClassName(updatedClassName);
    setClassName2(updatedClassName2);
  }, [screenWidth, showMain]);

  return (
    <>
      <Header setShowMain={setShowMain} showMain={showMain} />
      <main>
        <div className={classnames}>
          {/* <SideBar callback={setShowMain} mobile={isMobile} /> */}
          <div
            onClick={() => (screenWidth < 768 ? setShowMain(!showMain) : null)}
            className="w-full md:w-96 min-h-screen flex-1 fixed top-0 md:border-r border-primary-30 pt-14"
          >
            {sidebar}
          </div>
        </div>
        <div
          className={classNames(
            classNames2,
            'md:ml-96 relative min-h-[calc(100dvh-64.67px)] mt-0 bg-white'
          )}
        >
          {!showMain && (
            <button
              onClick={() => setShowMain(!showMain)}
              className="px-[2.1875rem] flex gap-[0.44rem] items-center md:hidden font-bold text-2xl pt-[2.125rem]"
            >
              <FaArrowLeft />
              {title}
            </button>
          )}
          {children}
        </div>
      </main>
    </>
  );
};

export default AppInnerLayout;
