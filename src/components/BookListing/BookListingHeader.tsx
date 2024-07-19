'use client';
import { Box, Flex, Link } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import CloseIcon from '../icons/CloseIcon';
import { Button } from '@chakra-ui/react';
const BookListingHeader = () => {
  const { submitForm, isValid } = useFormikContext();

  return (
    <Flex justify={'space-between'} align="center" pb="16px">
      <Link href="/">
        <CloseIcon height={'24px'} width={'24px'} />
      </Link>
      <Flex color="grey.400" align="center" gap="16px">
        <Box _hover={{ cursor: 'pointer' }}>Drafts</Box>
        <Button
          isDisabled={!isValid}
          borderRadius="32px"
          padding="8px 12px"
          onClick={submitForm}
        >
          List Book
        </Button>
      </Flex>
    </Flex>
  );
};

export default BookListingHeader;
