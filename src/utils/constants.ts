import {
  IoBagSharp,
  IoHeartSharp,
  IoWallet,
  IoWineSharp,
} from 'react-icons/io5';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { MdHotel } from 'react-icons/md';
import { RiRunFill } from 'react-icons/ri';
import { PiMedalMilitaryFill } from 'react-icons/pi';

export const SIDENAV_ITEMS = [
  {
    title: 'Restaurants',
    path: '/restaurants',
    icon: GiForkKnifeSpoon,
  },
  {
    title: 'Supermarkets',
    path: '/supermarkets',
    icon: IoBagSharp,
  },
  {
    title: 'Bars',
    path: '/bars',
    icon: IoWineSharp,
  },
  {
    title: 'Hotels',
    path: '/hotels',
    icon: MdHotel,
  },
  // {
  //   title: 'Activities',
  //   path: '/activities',
  //   icon: RiRunFill,
  // },
  // {
  //   title: 'Wallet',
  //   path: '/wallet',
  //   icon: IoWallet,
  // },
  // {
  //   title: 'Favourites',
  //   path: '/favourites',
  //   icon: IoHeartSharp,
  // },
  // {
  //   title: 'Rewards',
  //   path: '/rewards',
  //   icon: PiMedalMilitaryFill,
  // },
];
