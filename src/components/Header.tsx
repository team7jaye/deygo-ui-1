'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextUiLink,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { HiMiniBars3 } from 'react-icons/hi2';

import React from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { FaArrowLeft, FaGlobeAfrica } from 'react-icons/fa';
import { IoCaretDownSharp } from 'react-icons/io5';
import Link from 'next/link';
import Flags from './Flags';
import { usePathname } from 'next/navigation';
import InnerHeader from './InnerHeader';
type headerprops = {
  setShowMain: (x: boolean) => void;
  showMain: boolean;
};
const Header = ({ setShowMain, showMain }: headerprops) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();
  const paths = pathname.split('/');
  const menuItems = ['Profile', 'My Settings', 'Help & Feedback', 'Log Out'];
  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="md:px-[3.06rem] px-6 md:border-b border-primary-30"
        maxWidth="full"
      >
        <Link href={'/'}>
          <NavbarBrand>
            <img
              src="/deygo.svg"
              alt="deygo logo"
              className="max-w-[10vh] xl:max-w-[14vh] h-auto"
            />
          </NavbarBrand>
        </Link>

        <NavbarContent justify="end" className=" text-primary-10">
          <NavbarItem className="hidden md:flex">
            <BsFillGridFill className="w-7 h-7" />
          </NavbarItem>
          <NavbarItem className="hidden md:flex items-center">
            <img src="/flag.png" alt="flag-image" className="" />
            <IoCaretDownSharp className="text-black w-3" />
            {/* <Flags /> */}
          </NavbarItem>
          <NavbarItem className="hidden md:flex items-center">
            <FaGlobeAfrica className="w-7 h-7" />
            <IoCaretDownSharp className="text-black w-3" />
          </NavbarItem>
          <NavbarMenuToggle
            icon={<HiMiniBars3 />}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden w-6 h-6"
          />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextUiLink
                color={
                  index === 2
                    ? 'primary'
                    : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </NextUiLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className={showMain ? 'block md:hidden' : 'hidden'}>
        <InnerHeader
          pathname={paths[paths.length - 1]}
          callBack={() => setShowMain(false)}
        />
      </div>
    </>
  );
};

export default Header;
