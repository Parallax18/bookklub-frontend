import { Box, Flex, Link } from '@chakra-ui/react';
import CloseIcon from '../icons/CloseIcon';
import ReusableButton from '../general/ReusableButton';
const BookListingHeader = () => (
  <Flex justify={'space-between'} align="center" pb="16px">
    <Link href="/home">
      <CloseIcon />
    </Link>
    <Flex color="grey.400" align="center" gap="16px">
      <Box _hover={{ cursor: 'pointer' }}>Drafts</Box>
      <ReusableButton Type="List book" borderRadius="32px" />
    </Flex>
  </Flex>
);

export default BookListingHeader;
