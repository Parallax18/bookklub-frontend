'use client';
import { Box, Stack, Button } from '@chakra-ui/react';

import ReusableInput from '../general/Input';
import ReusableTextarea from '../general/ReusableTextArea';
import PictureUpload from './PictureUploadComponent';
import { useFormikContext } from 'formik';
import SelectInput from '../general/ReusableSelect';
import CustomSelect from '../general/CustomSelect';
const BookListingContent = () => {
  const { handleSubmit, values }: any = useFormikContext();
  const genreOptions = [
    { id: '1', title: 'Fiction' },
    { id: '2', title: 'Sci-Fi' },
    { id: '3', title: 'Self-help' },
    { id: '4', title: 'Business' },
    { id: '5', title: 'Christian' },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Stack spacing={'16px'}>
          <ReusableInput
            label="Book title"
            value={values.title}
            placeholder="eg. Think and grow rich"
            type="text"
            name="title"
          />
          <ReusableInput
            label="Author name"
            value={values.author}
            placeholder="e.g. Napoleon Hill"
            type="text"
            name="author"
          />
          <CustomSelect
            label="Genre"
            data={genreOptions}
            onSelect={() => {}}
            placeholder="Select or enter a genre"
          />
          <ReusableInput
            label="Book location"
            value={values.address}
            placeholder="e.g. 23, Langley Crescent, Idumota"
            type="text"
            name="address"
            description="This displays as the location of the book whenever someone wants to rent it"
          />
          <ReusableInput
            label="Country"
            value={values.country}
            placeholder="e.g. Nigeria"
            type="text"
            name="country"
          />
          <ReusableInput
            label="State"
            value={values.state}
            placeholder="e.g. Lagos"
            type="text"
            name="state"
          />

          <ReusableTextarea
            label="Book description"
            value={values.description}
            placeholder="Enter a book description"
            name="description"
          />
          {/* <ReusableTextarea
            label="Book description"
            value={values.description}
            placeholder="Give an extra info that would be useful for renters"
            name="description"
            description="Provide any extra information, note, caution that anyone renting this book should know"
          /> */}
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
