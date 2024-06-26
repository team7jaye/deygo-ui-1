// components/Sidebar.tsx
import { Box, Button, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import CategoryIcon from "../CategoryIcon";
import { FaArrowLeft, FaBeer } from "react-icons/fa";
import CategoryList from "../CategoryIcon/CategoryList";
import { useRouter } from "next/navigation";
import BusinessList from "../BusinessCard/BusinessList";
import { useStore } from "../../../store";

interface SidebarProps {
  backText: string | string[];
  categoryId: string | string[];
  onSelectDetail: (detail: string) => void; // new prop
}

const Sidebar = ({ backText, categoryId, onSelectDetail }: SidebarProps) => {
  const router = useRouter();
  const setSelectedDetail = useStore((state) => state.setSelectedDetail);

  const goBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <Box
      as="aside"
      w={{ base: "full", md: 80 }}
      pos="fixed"
      h="full"
      bg="white"
      //   color="white"
      p={4}
      borderRight={"1px"}
      order="12"
    >
      <Button
        onClick={goBack}
        leftIcon={<FaArrowLeft />}
        variant="ghost"
        // colorScheme="whiteAlpha"
        mb={2}
      >
        {backText}
      </Button>
      <BusinessList categoryId={categoryId} onSelectDetail={onSelectDetail} />
    </Box>
  );
};

export default Sidebar;
