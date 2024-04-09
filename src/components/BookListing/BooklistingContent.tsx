'use client';
import { Box, Stack, Button } from '@chakra-ui/react';

import ReusableInput from '../general/Input';
import ReusableTextarea from '../general/ReusableTextArea';
import PictureUpload from './PictureUploadComponent';
import { useFormikContext } from 'formik';
const BookListingContent = () => {
  const { handleSubmit, values }: any = useFormikContext();
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Stack spacing={'16px'}>
          <ReusableInput
            label="Book name"
            value={values.bookName}
            placeholder="eg. Think and grow rich"
            type="text"
            name="bookName"
          />
          <ReusableInput
            label="Author name"
            value={values.authorName}
            placeholder="e.g. Napoleon Hill"
            type="text"
            name="authorName"
          />
          <ReusableInput
            label="Book location"
            value={values.bookLocation}
            placeholder="e.g. 23, Langley Crescent, Idumota, Lagos"
            type="text"
            name="bookLocation"
          />
          <ReusableInput
            label="Rent duratiom"
            value={values.rentDuration.toString()}
            placeholder="e.g. 30"
            type="number"
            name="rentDuration"
            sideText="Days"
            description="This states the total amount of time (days) that a person can rent the book after the rent date"
          />
          <ReusableTextarea
            label="Rent info (optional)"
            value={values.rentInfo}
            placeholder="Give an extra info that would be useful for renters"
            name="rentInfo"
            description="Provide any extra information, note, caution that anyone renting this book should know"
          />
          <PictureUpload
            label="Add book cover"
            placeholder="Upload the book cover here"
            maxFileSizeInMB="2"
            description="This is the book cover that would be displayed. Ensure you select a picture that support the book name and is of high quality"
          />
        </Stack>
      </Box>
    </form>
  );
};
export default BookListingContent;
