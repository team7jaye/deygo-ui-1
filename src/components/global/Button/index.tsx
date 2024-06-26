import { Button, ButtonProps } from "@chakra-ui/react";

const DGButton = ({ children, ...rest }: ButtonProps) => {
  const styles: ButtonProps = {
    p: "16px 14px",
    fontWeight: "700",
    fontSize: "sm",
    borderRadius: "10px",
  };

  return (
    <Button textTransform="uppercase" {...styles} {...rest}>
      {children}
    </Button>
  );
};

export default DGButton;
