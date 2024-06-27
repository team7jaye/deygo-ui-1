import DGButton from "@/components/global/Button";
import DGInput from "@/components/global/Input";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "../../Header";
import DGHeader from "../../Header";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.800"); // Adjust background colors for light and dark mode

  return (
    <Box bg={bgColor} minH="100vh" transition="background-color 0.2s">
      <DGHeader />

      <Flex
        as="main"
        w="full"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt="60px"
        px={{ base: 4, md: 8 }} // Adjust padding for different screen sizes
      >
        {children}
      </Flex>
    </Box>
  );
};

export default AuthLayout;
