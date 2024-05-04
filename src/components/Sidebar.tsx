'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDENAV_ITEMS } from '@/utils/constants';

type Props = {
  callback: (x: boolean) => void;
  mobile: number;
};

const SideBar = ({ callback, mobile }: Props) => {
  const pathname = usePathname();
  console.log(mobile);
  return (
    <div className="w-full px-6 md:w-72 md:px-[3.06rem] h-screen flex-1 fixed md:border-r border-primary-30 pt-14 md:pt-6">
      <div className="flex  flex-col md:items-center  space-y-6 w-full">
        <div className="flex flex-col gap-2 md:px-6 h-[80dvh] overflow-auto">
          {SIDENAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              onClick={() => (mobile < 768 ? callback(true) : undefined)}
              className={`text-[1.384rem] flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100  text-primary-20 font-medium ${
                pathname.includes(item.path) ? 'bg-zinc-100 font-extrabold' : ''
              }`}
            >
              <item.icon className="text-secondary-50 flex-shrink-0" />
              <span className="font-semibold text-xl flex text-secondary-60">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
