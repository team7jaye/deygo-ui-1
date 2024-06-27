import React, { useEffect, useState } from "react";
import DescriptionSection from "./DescriptionSection";
import TimeContact from "./TimeContact";
import { Box, Flex, Heading, IconButton, Spinner, useColorModeValue } from "@chakra-ui/react";
import { getBusinessById } from "@/api/category";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Map from "../Map";
import { FaArrowLeft } from "react-icons/fa";
import { useStore } from "../../../store";

type Business = {
  id: string;
  name: string;
  description: string;
  contact: {
    phone?: string;
    email?: string;
  };
  address: string;
  operatingHours: string;
};

const BusinessDetails: React.FC = () => {
  const pathname = usePathname();
  const setSelectedDetail = useStore((state) => state.setSelectedDetail); // Use Zustand to set selected detail

  const id = pathname.split("/").pop(); // Extracting the id from the pathname

  const searchParams = useSearchParams();

  const search = searchParams.get("BusinessId");

  const router = useRouter();
  const [business, setBusiness] = useState<Business | null>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      if (search) {
        try {
          const data = await getBusinessById(search as string);
          setBusiness(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchBusiness();
  }, [search]);

  if (!business) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  const goBack = () => {
    setSelectedDetail(null); // Reset selected detail in Zustand
    router.back(); // Navigate back to the previous page
  };

  const headingColor = useColorModeValue("gray.800", "white");
  const descriptionBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box>
      <IconButton
        aria-label="Back"
        icon={<FaArrowLeft />}
        variant="ghost"
        mb={3}
        display={{ base: "block", md: "none" }}
        onClick={goBack}
      />
      <Heading as="h2" size="lg" mb={5} color={headingColor}>
        {business.name}
      </Heading>
      <Box mb={5}>
        <Map />
      </Box>
      <Box mb={5} bg={descriptionBgColor} p={4} borderRadius="md">
        <DescriptionSection content={{ description: business.description }} />
      </Box>
      <TimeContact
        content={{ contact: business.contact, address: business.address }}
      />
    </Box>
  );
};

export default BusinessDetails;
