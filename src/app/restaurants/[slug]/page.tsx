import InfoPill from '@/components/common/InfoPill';
import { BsTwitterX } from 'react-icons/bs';
import { CiGlobe, CiHeart } from 'react-icons/ci';
import {
  FaCheckCircle,
  FaEnvelope,
  FaInstagram,
  FaMotorcycle,
  FaPaw,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaDiamondTurnRight, FaMountainSun } from 'react-icons/fa6';
import { IoIosWifi } from 'react-icons/io';
import { IoShareSocial } from 'react-icons/io5';
import { LiaSwimmingPoolSolid } from 'react-icons/lia';
import { LuClock3 } from 'react-icons/lu';
import { RiBookReadFill, RiLightbulbFlashFill } from 'react-icons/ri';
import { TbReservedLine } from 'react-icons/tb';

const SingleRestaurantPage = () => {
  return (
    <div>
      <div className="divide-y divide-secondary-40">
        <div className="px-[2.1875rem] space-y-5 mb-8 pt-[2.125rem]">
          <h2 className="font-bold text-2xl">Yellow Chilli Restaurant</h2>
          <div className="rounded-3xl">
            <img src="/map.png" alt="map" />
          </div>
          <div className="flex gap-16 items-center justify-center">
            {actions.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-[12.75px] text-primary-10 font-semibold text-sm"
              >
                <div>
                  <item.icon className="text-4xl" />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2.5 items-center flex-wrap py-6 px-6">
          {extras.map((item) => (
            <InfoPill item={item} key={item.text} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 px-7 py-3.5">
          <div className="space-y-3.5">
            <h3 className="font-bold font-aleo">Opening Hours</h3>
            <div className="text-[0.9375rem] space-y-4">
              <div className="flex items-center gap-2">
                <LuClock3 className="text-primary-10" />
                <span>Mondays - Saturdays | 07:00AM - 19:00AM</span>
              </div>
              <div className="flex items-center gap-2">
                <LuClock3 className="text-primary-10" />
                <span>Sundays | Closed</span>
              </div>
            </div>
          </div>
          <div className="space-y-3.5">
            <h3 className="font-bold font-aleo">Contact Information</h3>
            <div className="text-[0.9375rem] space-y-4">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-primary-10" />
                <span>Phone number: +234 807 311 7817</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary-10" />
                <span>Email address: yellowchilli@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-7 py-3.5 space-y-3.5">
          <h3 className="font-bold font-aleo">Description</h3>
          <p className="text-[0.9375rem]">
            Lorem ipsum dolor sit amet consectetur. Tincidunt neque fermentum
            sapien vel sit. Quam lobortis neque vitae dictum ornare. In amet
            hendrerit iaculis lacus. Dui neque cras ut nunc nullam. Vulputate
            viverra sem ridiculus enim diam ipsum ut gravida fermentum. Volutpat
            quis est sagittis erat. Nisi ullamcorper eget urna accumsan amet
            egestas mi. Risus.
          </p>
        </div>
        <div className="px-7 py-3.5 space-y-3.5">
          <h3 className="font-bold font-aleo">Photos</h3>
          <div className="flex gap-[8.87px] overflow-auto">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="max-w-[6.65rem] overflow-hidden rounded-[13.3px] flex-shrink-0"
              >
                <img src={photo} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="px-7 py-3.5 space-y-3.5">
          <h3 className="font-bold font-aleo">Amenities</h3>
          <div className="flex gap-2.5 items-center flex-wrap">
            {amenities.map((item) => (
              <InfoPill item={item} key={item.text} />
            ))}
          </div>
        </div>
        <div className="px-7 py-3.5">
          <div className="min-w-[4rem] w-max h-auto bg-[#059C1D] rounded-3xl flex items-center px-2.5 py-1.5">
            <FaCheckCircle className="text-white mr-2 h-4 w-4" />
            <div className="text-white text-xs font-medium">Owner-verified</div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center py-24">Report a problem</p>
      </div>
    </div>
  );
};

export default SingleRestaurantPage;
const actions = [
  { text: 'Directions', icon: FaDiamondTurnRight },
  { text: 'Favourite', icon: CiHeart },
  { text: 'Share', icon: IoShareSocial },
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
