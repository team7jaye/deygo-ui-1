import { Flex, FormHelperText, Icon } from "@chakra-ui/react";
import { BsInfoCircleFill } from "react-icons/bs";

type Props = { helperText: React.ReactNode };

function DGInputHelperText({ helperText }: Props) {
  return (
    <Flex
      as={FormHelperText}
      gap={1}
      align="flex-start"
      fontSize={["xs", null, "sm"]}
    >
      <Icon as={BsInfoCircleFill} />
      {helperText}
    </Flex>
  );
}

export default DGInputHelperText;