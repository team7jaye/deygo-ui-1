'use client';
import CommonItemList from '@/components/common/CommonItemList';
import { FaMotorcycle } from 'react-icons/fa';
import { RiBookReadFill } from 'react-icons/ri';

const MainBar = ({ mx }: { mx?: boolean }) => {
  return <CommonItemList mx={mx} itemArr={bars} link={'/bars'} page="Bars" />;
};

export default MainBar;

const bars = [
  {
    id: 1,
    name: "DMayor's Lounge",
    time: '42 mins',
    location: 'Ikorodu',
    type: 'Fine-dining',
    likes: 16,
    extras: [
      {
        text: 'Menu',
        icon: RiBookReadFill,
      },
      {
        text: 'Jumia Foods',
        icon: FaMotorcycle,
      },
    ],
  },
  {
    id: 2,
    name: 'The Afterlife',
    time: '30 mins',
    location: 'Lekki',
    type: 'Casual',
    likes: 20,
    extras: [
      {
        text: 'Menu',
        icon: RiBookReadFill,
      },
      {
        text: 'Jumia Foods',
        icon: FaMotorcycle,
      },
    ],
  },
  {
    id: 3,
    name: "Steve's Bar",
    time: '30 mins',
    location: 'Lekki',
    type: 'Casual',
    likes: 20,
    extras: [
      {
        text: 'Menu',
        icon: RiBookReadFill,
      },
      {
        text: 'Jumia Foods',
        icon: FaMotorcycle,
      },
    ],
  },
  {
    id: 4,
    name: 'Drink With Style',
    time: '30 mins',
    location: 'Lekki',
    type: 'Casual',
    likes: 20,
    extras: [
      {
        text: 'Menu',
        icon: RiBookReadFill,
      },
      {
        text: 'Jumia Foods',
        icon: FaMotorcycle,
      },
    ],
  },
  {
    id: 5,
    name: 'Atmosphere',
    time: '30 mins',
    location: 'Lekki',
    type: 'Casual',
    likes: 20,
    extras: [
      {
        text: 'Menu',
        icon: RiBookReadFill,
      },
      {
        text: 'Jumia Foods',
        icon: FaMotorcycle,
      },
    ],
  },
  // Add more items as needed
];
