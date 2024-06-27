import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import CategoryIcon from "../CategoryIcon";
import { FaArrowLeft } from "react-icons/fa";
import BusinessList from "../BusinessCard/BusinessList";
import { useRouter } from "next/navigation";
import { useStore } from "../../../store";

interface SidebarProps {
  backText: string | string[];
  categoryId: string | string[];
  onSelectDetail: (detail: string) => void;
}

const Sidebar = ({ backText, categoryId, onSelectDetail }: SidebarProps) => {
  const router = useRouter();
  const setSelectedDetail = useStore((state) => state.setSelectedDetail);

  const goBack = () => {
    router.back(); // Go back to the previous page
  };

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const buttonTextColor = useColorModeValue('gray.800', 'gray.200');

  return (
    <Box
      as="aside"
      w={{ base: "full", md: 80 }}
      pos="fixed"
      h="full"
      bg={bgColor}
      p={4}
      borderRight="1px"
      borderColor={borderColor}
    >
      <Button
        onClick={goBack}
        leftIcon={<FaArrowLeft />}
        variant="ghost"
        color={buttonTextColor}
        mb={2}
      >
        {backText}
      </Button>
      <BusinessList categoryId={categoryId} onSelectDetail={onSelectDetail} />
    </Box>
  );
};

export default Sidebar;
