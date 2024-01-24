'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDENAV_ITEMS } from '@/utils/constants';

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full px-6 md:w-72 md:px-[3.06rem] h-screen flex-1 fixed md:border-r border-primary-30 pt-14 md:pt-6">
      <div className="flex  flex-col md:items-center  space-y-6 w-full">
        <div className="flex flex-col gap-2 md:px-6 h-[80dvh] overflow-auto">
          {SIDENAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className={`text-[1.384rem] flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100  text-primary-20 font-medium ${
                item.path === pathname ? 'bg-zinc-100' : ''
              }`}
            >
              <item.icon className="text-primary-10 flex-shrink-0" />
              <span className="font-semibold text-xl flex">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
