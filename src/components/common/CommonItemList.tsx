'use client';

import ItemCard from '@/components/common/ItemCard';
import InfoPillGrey from '@/components/common/infoPillGrey';
import { classNames } from '@/utils/functions';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { IconType } from 'react-icons';
import { FaMotorcycle } from 'react-icons/fa';
import { RiArrowLeftLine, RiBookReadFill } from 'react-icons/ri';
type props = {
  mx?: boolean;
  itemArr: Record<string, any>[];
  link: string;
  page: string;
};

export type ItemsArr = {
  id: number;
  name: string;
  time?: string;
  location?: string;
  type?: string;
  likes?: number;
  extras?: {
    text: string;
    icon: IconType;
  }[];
};
const CommonItemList = ({ mx, itemArr, link, page }: props) => {
  const params = useParams();

  return (
    <div
      className={classNames(
        mx ? 'pt-[2.125rem] ' : 'md:pt-[2.125rem] ',
        'max-h-[calc(100dvh-64.67px)] flex flex-col overflow-auto no-scrollbar'
      )}
    >
      <div
        className={classNames(
          !mx ? 'px-[2.1875rem]' : 'px-7',
          'space-y-4 mb-8'
        )}
      >
        <h2
          className={classNames(
            mx ? 'block' : 'hidden md:block',
            'font-bold text-2xl'
          )}
        >
          {mx ? (
            <Link href={link} className="flex items-center">
              <div className={!mx ? 'hidden' : 'block'}>
                <RiArrowLeftLine />
              </div>{' '}
              {page}
            </Link>
          ) : (
            <>{page}</>
          )}
        </h2>
        <div className="flex gap-1.5 items-center overflow-auto no-scrollbar">
          {items.map((item) => (
            <InfoPillGrey text={item} key={item} />
          ))}
        </div>
      </div>
      <div>
        <div className={classNames(!mx ? 'md:px-[1.0625rem]' : '')}>
          {itemArr.map((item) => (
            <Link
              key={item.id}
              href={`${link}/${item.name}`}
              className={classNames(
                mx && decodeURIComponent(params?.slug as string) == item.name
                  ? 'bg-secondary-20'
                  : 'bg-transparent',
                'block'
              )}
            >
              <ItemCard key={item.id} data={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonItemList;
const items = ['Takeaway', 'Live Sports', 'Outdoor'];
