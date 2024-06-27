import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FaDirections } from "react-icons/fa";

const Map: React.FC = () => {
  return (
    <Box w="full">
      <Box
        w="full"
        h={{ base: "250px", sm: "300px", md: "400px" }}
        rounded="md"
        overflow="hidden"
      >
        <Image
          src="/map.png"
          alt="Restaurant location"
          objectFit="cover"
          w="full"
          h="full"
        />
      </Box>
      <Flex
        mt={2}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        p={2}
        borderRadius="md"
        color={useColorModeValue("gray.800", "white")}
      >
        <FaDirections size={24} />
        <Text mt={1} fontSize="md" fontWeight="bold">
          Directions
        </Text>
      </Flex>
    </Box>
  );
};

export default Map;
