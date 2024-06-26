import { ReactNode } from "react";
import { Box, Container, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import DGHeader from "../../Header";
import Sidebar from "@/components/SideBar";
import { useStore } from "../../../../../store";

interface LayoutProps {
  children: ReactNode;
  backText: string | string[];
  title: string | string[];
  categoryId: string | string[];
}

const BusinessLayout = ({ children, backText, title, categoryId }: LayoutProps) => {
  const selectedDetail = useStore((state) => state.selectedDetail);
  const setSelectedDetail = useStore((state) => state.setSelectedDetail);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <DGHeader  />
      <Flex marginTop="60px"> {/* Adjust this margin based on your header height */}
        {(isMobile && !selectedDetail) ? (
          <Sidebar
            backText={backText}
            categoryId={categoryId}
            onSelectDetail={setSelectedDetail} // Pass the handler from Zustand
          />
        ) : (
          <>
            <Box display={{ base: "none", md: "block" }}>
              <Sidebar
                backText={backText}
                categoryId={categoryId}
                onSelectDetail={setSelectedDetail} // Pass the handler from Zustand
              />
            </Box>
            <Container maxW={"initial"} ml={{ base: 0, md: 80 }}>
              <Box as="main" p={4}>
                {!isMobile && (
                  <Heading className="hidden md:block font-bold text-2xl">
                    {title}
                  </Heading>
                )}
                {selectedDetail ? (
                  children
                ) : (
                  <Box>Select an item from the sidebar</Box>
                )}
                
              </Box>
            </Container>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default BusinessLayout;
