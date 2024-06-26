import { Box, Heading, Text, Stack } from "@chakra-ui/react";

type Content = {
  description?: string;
};

type Props = {
  content?: Content;
};

const DescriptionSection = ({ content }: Props) => {
  return (
    <Box px={7} py={3.5}>
      <Stack spacing={3.5}>
        <Heading as="h3" size="md" fontFamily="Aleo" fontWeight="bold">
          Description
        </Heading>
        <Text fontSize="0.9375rem">
          {content?.description
            ? content.description
            : "No description available"}
        </Text>
      </Stack>
    </Box>
  );
};

export default DescriptionSection;
