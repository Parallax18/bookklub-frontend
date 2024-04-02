import { Box, Flex } from '@chakra-ui/react';
interface ButtonProps {
  Type: string;
  borderRadius?: string;
  padding?: string;
  // You can add more props like placeholder, type, etc. as needed
}
const ReusableButton: React.FC<ButtonProps> = ({
  Type,
  borderRadius,
  padding,
}) => {
  return (
    <Box
      type="submit"
      as="button"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      p={padding || '16px'}
      borderRadius={borderRadius || '8px'}
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
