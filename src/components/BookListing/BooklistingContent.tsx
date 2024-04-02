'use client';
import { Box, Stack, Button } from '@chakra-ui/react';
import * as Yup from 'yup';
import ReusableInput from '../general/Input';
import BookListingHeader from './BookListingHeader';
import { Formik, FormikHelpers, Form } from 'formik';
import ReusableTextarea from '../general/ReusableTextArea';
const BookListingContent = () => {
  const validationSchema = Yup.object().shape({
    bookName: Yup.string().required('Book name is required'),
    authorName: Yup.string().required('Author name is required'),
    bookLocation: Yup.string().required("Book's location is required"),
    rentDuration: Yup.number().required('Rent duration is required'),
    rentInfo: Yup.string(),
  });
  const handleSubmit = (value: any, next: any) => {
    console.log({ value, next });
  };
  return (
    <Formik
      initialValues={{
        bookName: '',
        authorName: '',
        bookLocation: '',
        rentDuration: '',
        rentInfo: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Box>
          <Form>
            <Box mb="24px">
              <BookListingHeader></BookListingHeader>
            </Box>

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
            </Stack>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
export default BookListingContent;
