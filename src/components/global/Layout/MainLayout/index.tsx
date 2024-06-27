// components/Layout.tsx
import { ReactNode } from "react";
import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import DGInput from "@/components/global/Input";
import DGHeader from "../../Header";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      minH="100vh"
      display="flex"
      flexDirection="column"
    >
      <DGHeader />

      <Container
        maxW="6xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={"60px"}
      >
        <DGInput
          w="50%"
          id="packageName"
          type="search"
          placeholder="Search"
          onChange={() => {}}
          mb={4} // Adding margin bottom for spacing
        />

        <Flex
          as="main"
          w="full"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {children}
        </Flex>
      </Container>
    </Box>
  );
};

export default MainLayout;
