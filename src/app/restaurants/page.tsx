import ActivitiesList from '@/components/ActivitiesList';
import InfoPill from '@/components/common/InfoPill';
import InfoPillGrey from '@/components/common/infoPillGrey';
import { FaMotorcycle } from 'react-icons/fa';
const Restaurants = () => {
  const items = [
    {
      name: 'Restaurant 1',
      time: '42 mins',
      location: 'Ikorodu',
      type: 'Fine-dining',
      foodType: 'test',
      likes: 16,
    },
    {
      name: 'Restaurant 2',
      time: '30 mins',
      location: 'Lekki',
      type: 'Casual',
      foodType: 'test',
      likes: 20,
    },
    // Add more items as needed
  ];

  return (
    <div>
      <div>
        {/* <ActivitiesList items={items} /> */}
        <InfoPill item={{ text: 'text', icon: FaMotorcycle }} />
        <InfoPillGrey text="Outdoor" />
      </div>
    </div>
  );
};

export default Restaurants;
