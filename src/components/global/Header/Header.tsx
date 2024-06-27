import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { FaBars, FaTh, FaThLarge, FaThList, FaTimes } from "react-icons/fa";
import { Link } from "@chakra-ui/next-js";
import { useViewStore } from "../../../../store";
import { usePathname } from "next/navigation";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { view, toggleView } = useViewStore();
  const pathname = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();

  const isHomePage = pathname === "/";
  const filterValue = useColorModeValue("none", "invert(1)");

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.800")}
        px={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt="deygo logo"
              maxW={{ base: "10vh", xl: "14vh" }}
              h="auto"
              boxSize={"100px"}
              filter={filterValue}
            />
          </Link>
          {/* <Box>Logo</Box> */}
          <HStack spacing={8} alignItems={"center"}>
            <Box display={{ base: "none", md: "flex" }}>
              {isHomePage && ( // Render only on the homepage
                <IconButton
                  size="md"
                  icon={view === "list" ? <FaTh /> : <FaThList />}
                  aria-label="Toggle Grid"
                  onClick={toggleView}
                />
              )}
            </Box>

            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <IconButton
              size="md"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              ml={4}
            />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Flex direction="column" gap={4}>
              {isHomePage && ( // Render only on the homepage
                <IconButton
                  size="md"
                  icon={view === "list" ? <FaTh /> : <FaThList />}
                  aria-label="Toggle Grid"
                  onClick={toggleView}
                />
              )}
              {/* Add your mobile navigation items here */}
              <Box>Home</Box>
              <Box>About</Box>
              <Box>Contact</Box>
            </Flex>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Header;
