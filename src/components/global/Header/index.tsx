// // components/Header.tsx
// import { Link } from "@chakra-ui/next-js";
// import { Box, Flex, Heading, Button, Image } from "@chakra-ui/react";
// import DGButton from "../Button";

// const Header = () => {
//   return (
//     <Box bg="" w={'full'} px={4} py={2} borderBottom={"1px"}>
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <Link href="/">
//           <Flex align="center">
//             <Image src="/logo.svg" alt="Logo" boxSize="100px" mr={2} />
//           </Flex>
//         </Link>

//         <DGButton  colorScheme="error" variant="outline">
//           Log In
//         </DGButton>
//       </Flex>
//     </Box>
//   );
// };

// export default Header;

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./Header";

type Props = {};

const DGHeader = (props: Props) => {
  return (
    <>
      <Header  />
    </>
  );
};

export default DGHeader;
