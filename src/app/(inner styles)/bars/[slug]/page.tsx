'use client';
import MainBar from '@/app/(outer styles)/bars/MainBar';
import MainRestuarant from '@/app/(outer styles)/restaurants/MainRestuarant';
import AppInnerLayout from '@/components/appInnerLayout';
import InnerPageContent from '@/components/common/InnerPageContent';
import { useParams } from 'next/navigation';
import { BsTwitterX } from 'react-icons/bs';
import { CiGlobe, CiHeart } from 'react-icons/ci';
import { FaInstagram, FaMotorcycle, FaPaw, FaWhatsapp } from 'react-icons/fa';
import { FaDiamondTurnRight, FaMountainSun } from 'react-icons/fa6';
import { IoIosWifi } from 'react-icons/io';
import { IoShareSocial } from 'react-icons/io5';
import { LiaSwimmingPoolSolid } from 'react-icons/lia';
import { RiBookReadFill, RiLightbulbFlashFill } from 'react-icons/ri';
import { TbReservedLine } from 'react-icons/tb';

const SingleRestaurantPage = () => {
  const { slug } = useParams();

  return (
    <AppInnerLayout sidebar={<MainBar mx={true} />}>
      <InnerPageContent
        data={{
          title: decodeURIComponent(slug as string),
          actions,
          extras,
          photos,
          amenities,
        }}
      />
    </AppInnerLayout>
  );
};

export default SingleRestaurantPage;
const actions = [
  { text: 'Directions', icon: FaDiamondTurnRight },
  // { text: 'Favourite', icon: CiHeart },
  // { text: 'Share', icon: IoShareSocial },
];

const extras = [
  {
    text: 'Menu',
    icon: RiBookReadFill,
  },
  {
    text: '+234 809 231 2761',
    icon: FaWhatsapp,
  },
  {
    text: 'Jumia Foods',
    icon: FaMotorcycle,
  },
  {
    text: 'Reserve',
    icon: TbReservedLine,
  },
  {
    text: 'Website',
    icon: CiGlobe,
  },
  {
    text: 'X',
    icon: BsTwitterX,
  },
  {
    text: 'Instagram',
    icon: FaInstagram,
  },
];

const amenities = [
  {
    text: 'Free WiFi',
    icon: IoIosWifi,
  },
  {
    text: 'Swimming Pool',
    icon: LiaSwimmingPoolSolid,
  },
  {
    text: 'Outdoor seating',
    icon: FaMountainSun,
  },
  {
    text: 'Pet friendly',
    icon: FaPaw,
  },
  {
    text: '24/7 Electricity',
    icon: RiLightbulbFlashFill,
  },
];

const photos = ['/photo.png', '/photo2.png', '/photo2.png', '/photo2.png'];
