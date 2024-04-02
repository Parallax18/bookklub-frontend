'use client';
import { Box, Flex, Link } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import CloseIcon from '../icons/CloseIcon';
import ReusableButton from '../general/ReusableButton';
const BookListingHeader = () => {
  const { submitForm } = useFormikContext();

  return (
    <Flex justify={'space-between'} align="center" pb="16px">
      <Link href="/home">
        <CloseIcon height={'24px'} width={'24px'} />
      </Link>
      <Flex color="grey.400" align="center" gap="16px">
        <Box _hover={{ cursor: 'pointer' }}>Drafts</Box>
        <ReusableButton
          Type="List book"
          borderRadius="32px"
          padding="8px 12px"
        />
      </Flex>
    </Flex>
  );
};

export default BookListingHeader;
