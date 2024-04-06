'use client';
import { Box, Stack, Button } from '@chakra-ui/react';

import ReusableInput from '../general/Input';
import BookListingHeader from './BookListingHeader';

import ReusableTextarea from '../general/ReusableTextArea';
const BookListingContent = ({ formik }: { formik: any }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <Stack spacing={'16px'}>
          <ReusableInput
            label="Book name"
            value={formik.values.bookName}
            placeholder="eg. Think and grow rich"
            type="text"
            name="bookName"
          />
          <ReusableInput
            label="Author name"
            value={formik.values.authorName}
            placeholder="e.g. Napoleon Hill"
            type="text"
            name="authorName"
          />
          <ReusableInput
            label="Book location"
            value={formik.values.bookLocation}
            placeholder="e.g. 23, Langley Crescent, Idumota, Lagos"
            type="text"
            name="bookLocation"
          />
          <ReusableInput
            label="Rent duratiom"
            value={formik.values.rentDuration.toString()}
            placeholder="e.g. 30"
            type="number"
            name="rentDuration"
            sideText="Days"
            description="This states the total amount of time (days) that a person can rent the book after the rent date"
          />
          <ReusableTextarea
            label="Rent info (optional)"
            value={formik.values.rentInfo}
            placeholder="Give an extra info that would be useful for renters"
            name="rentInfo"
            description="Provide any extra information, note, caution that anyone renting this book should know"
          />
        </Stack>
      </Box>
    </form>
  );
};
export default BookListingContent;
