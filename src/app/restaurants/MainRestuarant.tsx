import ItemCard from '@/components/common/ItemCard';
import InfoPillGrey from '@/components/common/infoPillGrey';
import Link from 'next/link';
import { FaMotorcycle } from 'react-icons/fa';
import { RiBookReadFill } from 'react-icons/ri';

const MainRestuarant = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Restaurant 1',
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
      name: 'Restaurant 2',
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
  return (
    <div className="pt-[2.125rem]">
      <div className="px-[2.1875rem] space-y-4 mb-8">
        <h2 className="hidden md:block font-bold text-2xl">Restaurants</h2>
        <div className="flex gap-1.5 items-center overflow-auto">
          {items.map((item) => (
            <InfoPillGrey text={item} key={item} />
          ))}
        </div>
      </div>
      <div className="md:px-[1.0625rem]">
        {restaurants.map((item) => (
          <Link key={item.id} href={`restaurants/${item.name}`}>
            <ItemCard key={item.id} data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainRestuarant;
const items = ['Takeaway', 'Live Sports', 'Outdoor'];
