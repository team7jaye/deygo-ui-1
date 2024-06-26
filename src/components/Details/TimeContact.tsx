import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";

type Content = {
  contact: {
    phone?: string;
    email?: string;
  };
  address?: string;
};

type Props = {
  content?: Content;
};

const TimeContact: React.FC<Props> = ({ content }) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      px={{ base: 4, md: 7 }}
      py={{ base: 2, md: 3.5 }}
      gap={{ base: 4, md: 5 }}
      justifyContent="space-between"
      w="full"
    >
      {/* Opening Hours Section */}
      <Box flex={1}>
        <Heading as="h3" size="md" fontFamily="Aleo" fontWeight="bold" mb={3.5}>
          Opening Hours
        </Heading>
        <Stack spacing={4} fontSize="sm">
          <Flex align="center" gap={2} color="gray.600">
            <LuClock3 color="#FB3D3D" />
            <Text>Monday - Saturday | 07:00AM - 07:00PM</Text>
          </Flex>
          <Flex align="center" gap={2} color="gray.600">
            <LuClock3 color="#FB3D3D" />
            <Text>Sunday | Closed</Text>
          </Flex>
        </Stack>
      </Box>

      {/* Contact Information Section */}
      <Box flex={1}>
        <Heading as="h3" size="md" fontFamily="Aleo" fontWeight="bold" mb={3.5}>
          Contact Information
        </Heading>
        <Stack spacing={4} fontSize="sm">
          <Flex align="center" gap={2} color="gray.600">
            <FaPhoneAlt color="#FB3D3D" />
            <Text>Phone: {content?.contact?.phone || "-"}</Text>
          </Flex>
          <Flex align="center" gap={2} color="gray.600">
            <FaEnvelope color="#FB3D3D" />
            <Text>Email: {content?.contact?.email || "-"}</Text>
          </Flex>
          <Flex align="center" gap={2} color="gray.600">
            <FaEnvelope color="#FB3D3D" />
            <Text>Address: {content?.address || "-"}</Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};

export default TimeContact;
