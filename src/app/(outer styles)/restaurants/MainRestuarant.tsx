'use client';

import CommonItemList from '@/components/common/CommonItemList';
import { FaMotorcycle } from 'react-icons/fa';
import { RiBookReadFill } from 'react-icons/ri';

const MainRestuarant = ({ mx }: { mx?: boolean }) => {
  return (
    <CommonItemList
      mx={mx}
      itemArr={restaurants}
      link={'/restaurants'}
      page="Restaurants"
    />
  );
};

export default MainRestuarant;
const restaurants = [
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
    name: "Elise's Restaurant",
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
