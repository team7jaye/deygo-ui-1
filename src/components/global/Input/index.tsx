import {
  Box,
  Input,
  InputProps,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormControl,
} from "@chakra-ui/react";
import DGInputErrorMessage from "./InputErrorMessage";
import DGInputHelperText from "./InputHelperText";
import DGInputLabel from "./InputLabel";

interface InputFieldProps extends InputProps {
  error?: any;
  label?: string;
  helperText?: string | React.ReactNode;
  addOnBefore?: React.ReactNode;
  addOnAfter?: React.ReactNode;
}

const DGInput = ({
  error,
  label,
  helperText,
  addOnBefore,
  addOnAfter,
  ...rest
}: InputFieldProps) => {
  return (
    <Box as={FormControl} my={4}>
      {label && <DGInputLabel label={label} />}

      <InputGroup borderColor="primary.300">
        {addOnBefore && (
          <InputLeftAddon borderRadius="10px">{addOnBefore}</InputLeftAddon>
        )}

        <Input
          onWheel={(e) => e.currentTarget.blur()}
          borderRadius="10px"
          _hover={{ borderColor: "primary.600" }}
          {...rest}
        />

        {addOnAfter && (
          <InputRightAddon borderRadius="10px">{addOnAfter}</InputRightAddon>
        )}
      </InputGroup>

      {error && <DGInputErrorMessage error={error} />}

      {helperText && <DGInputHelperText helperText={helperText} />}
    </Box>
  );
};

export default DGInput;
