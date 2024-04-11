'use client';
import { Box, Stack, Button, useDisclosure } from '@chakra-ui/react';

import ReusableInput from '../general/Input';
import ReusableTextarea from '../general/ReusableTextArea';
import PictureUpload from './PictureUploadComponent';
import BottomDrawer from '../general/BottomDrawer';
import { useFormikContext } from 'formik';
import { IBooklistingForm } from '@/app/(base)/new-listing/page';
import WebSearchResults from './WebSearchResults';

const BookListingContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { values, handleSubmit } = useFormikContext<IBooklistingForm>();
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
            onSecondaryButtonClick={() => {
              onOpen();
            }}
          />
        </Stack>
      </Box>
      <BottomDrawer
        isOpen={isOpen}
        onClose={onClose}
        title={values.title}
        subTitle={'Web results'}
        closeButton={
          <Button borderRadius="2rem" padding="0.5rem 0.75rem">
            Done
          </Button>
        }
      >
        <WebSearchResults
          urls={[
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lighting.jpeg?alt=media&token=43c434cf-19a3-404d-bf02-41453b4fbc1b',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lady.jpeg?alt=media&token=25156b8e-f42d-4409-9a7e-2ea984bd5aa8',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/earrings.jpeg?alt=media&token=dbc6a50e-8330-4d55-88ba-b1298db27b74',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/flashy.jpeg?alt=media&token=5ee8efcc-ef77-4c06-b19d-10d7c2499bd5',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lighting.jpeg?alt=media&token=43c434cf-19a3-404d-bf02-41453b4fbc1b',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lady.jpeg?alt=media&token=25156b8e-f42d-4409-9a7e-2ea984bd5aa8',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/earrings.jpeg?alt=media&token=dbc6a50e-8330-4d55-88ba-b1298db27b74',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/flashy.jpeg?alt=media&token=5ee8efcc-ef77-4c06-b19d-10d7c2499bd5',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lighting.jpeg?alt=media&token=43c434cf-19a3-404d-bf02-41453b4fbc1b',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lady.jpeg?alt=media&token=25156b8e-f42d-4409-9a7e-2ea984bd5aa8',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/earrings.jpeg?alt=media&token=dbc6a50e-8330-4d55-88ba-b1298db27b74',
            'https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/flashy.jpeg?alt=media&token=5ee8efcc-ef77-4c06-b19d-10d7c2499bd5',
          ]}
        />
      </BottomDrawer>
    </form>
  );
};
export default BookListingContent;
