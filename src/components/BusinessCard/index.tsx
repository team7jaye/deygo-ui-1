import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { GrLocationPin } from "react-icons/gr";
import { TiLocation } from "react-icons/ti";
import DGButton from "../global/Button";

type Props = {
  name: string;
  address: string;
  distance: string | number;
  id: string | number;
  onSelectDetail?: (detail: string) => void; // Make the prop optional
};

const BusinessCardItem = ({
  name,
  address,
  distance,
  id,
  onSelectDetail,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleClick = () => {
    router.push(pathname + "?" + createQueryString("BusinessId", `${id}`));
    if (onSelectDetail) {
      onSelectDetail(name); // Call the function with the detail if defined
    }
  };

  return (
    <DGButton
      onClick={handleClick}
      as="a"
      variant="unstyled"
      className="bg-transparent w-full px-7 md:py-3.5 max-w-3xl min-h-28 relative border-b border-zinc-100"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      _hover={{
        textDecoration: "none",
        backgroundColor: "gray.100",
      }}
      cursor="pointer"
      textAlign="left"
    >
      <Box flex="1">
        <Text fontSize="lg" fontWeight="medium" color="neutral.800">
          {name}
        </Text>
        <Flex
          flexDirection="column"
          gap={1}
          color="secondary.500"
          fontSize="sm"
        >
          <Flex alignItems="center">
            <GrLocationPin color="#FB3D3D" />
            <Text ml={1}>{address}</Text>
          </Flex>
          <Flex alignItems="center">
            <TiLocation color="#FB3D3D" />
            <Text ml={1}>{distance}</Text>
          </Flex>
        </Flex>
      </Box>
    </DGButton>
  );
};

export default BusinessCardItem;
