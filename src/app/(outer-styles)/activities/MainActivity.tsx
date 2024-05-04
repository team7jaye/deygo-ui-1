'use client';
import CommonItemList from '@/components/common/CommonItemList';
import { FaMotorcycle } from 'react-icons/fa';
import { RiBookReadFill } from 'react-icons/ri';

const MainActivity = ({ mx }: { mx?: boolean }) => {
  return (
    <CommonItemList
      mx={mx}
      itemArr={activities}
      link={'/activities'}
      page="Activities"
    />
  );
};

export default MainActivity;

const activities = [
  {
    id: 1,
    name: 'Yellow Chilli Restaurant',
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
    name: 'De Luxxes Super Mart',
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
    name: 'Rockford SuperMart',
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
    name: 'Vinewood Plaza',
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
    name: 'De Luxxes Super Mart',
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
