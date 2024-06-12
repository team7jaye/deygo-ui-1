"use client"

import {
    Box,
    Center,
    Container,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import authBG from "assets/images/authBG.png";
  import logo from "assets/images/full-logo.png";
  import Link from "next/link";


  import ScrollToTopPoint from "../ScrollToTopPoint";
import { Routes } from "@/utils/routes";
  
  interface IAuthLayout {
    title?: string;
    subTitle?: string;
    children: React.ReactNode;
  }
  
  function AuthLayout({ title = "", subTitle = "", children }: IAuthLayout) {
    return (
      <SimpleGrid columns={[1, null, 2]} h="100vh">
        <Container
          as={Flex}
          flexDir="column"
          gap={14}
          maxW="8xl"
          size="lg"
          py={10}
          px={{ base: 10, lg: 20 }}
          overflowX="auto"
        >
          <Link href={Routes.login} passHref>
            <Box display={["none", null, "block"]}>
              {/* <Image src={logo.src} alt="Sanwo" maxW="160px" /> */}
            </Box>
          </Link>
  
          <Center
            maxW={["100%", "350px"]}
            m="auto"
            w="full"
            flexDir="column"
            gap={12}
          >
            <Link href={Routes.login} passHref>
              <Box display={["block", null, "none"]}>
                {/* <Image src={logo.src} alt="Sanwo" /> */}
              </Box>
            </Link>
  
            <ScrollToTopPoint />
  
            <Box w="full" textAlign="center">
              <Heading color="primary.500" fontWeight={500}>
                {title || "Welcome back."}
              </Heading>
              <Text mb={10}>{subTitle || "Login into your account"}</Text>
  
              {children}
            </Box>
          </Center>
        </Container>
  
        <Box
        //   bgImage={authBG.src}
          bgSize="100% 100%"
          bgRepeat="no-repeat"
          display={["none", null, "block"]}
        />
      </SimpleGrid>
    );
  }
  
  export default AuthLayout;