import DGButton from "@/components/global/Button";
import DGInput from "@/components/global/Input";
import { Box, Button, Container, Divider, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "../../Header";
import DGHeader from "../../Header";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Box bg="#f9f9f9">
      <DGHeader />

      <Flex
        as="main"
        w="full"
        // p={4}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt={'60px'}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default AuthLayout;
