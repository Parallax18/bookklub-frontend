import { Box, Flex } from "@chakra-ui/react";
interface ButtonProps {
  Type: string;
  // You can add more props like placeholder, type, etc. as needed
}
const ReusableButton: React.FC<ButtonProps> = ({ Type }) => {
  return (
    <Box
      type="submit"
      as="button"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      p="16px"
      borderRadius="8px"
      fontSize="16px"
      fontWeight="semibold"
      bg="primary.100"
      color="#FFFFFF"
    >
      {Type}
    </Box>
  );
};

export default ReusableButton;