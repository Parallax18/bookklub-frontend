'use client';

import AuthPagesFooterComponent from '@/components/general/AuthPagesFooterComponent';
import * as Yup from 'yup';
import BookListingHeader from '@/components/BookListing/BookListingHeader';
import BookListingContent from '@/components/BookListing/BooklistingContent';
import { FormikProvider, useFormik } from 'formik';
import { Box } from '@chakra-ui/react';

export default function NewListing() {
  const handleSubmit = (value: any, next: any) => {
    console.log({ value, next });
  };
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      description: '',
      coverImg: '',
      genre: '',
      address: '',
      state: '',
      country: '',
    },
    onSubmit: handleSubmit,
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Book title is required'),
      author: Yup.string().required('Author name is required'),
      description: Yup.string(),
      coverImg: Yup.string().required('A cover image is required'),
      genre: Yup.string().required('A book genre is required'),
      address: Yup.string().required('An address is required'),
      state: Yup.string().required('State of residence is required'),
      country: Yup.string().required('Country of residence is required'),
    }),
  });

  return (
    <main>
      <FormikProvider value={formik}>
        <BookListingHeader></BookListingHeader>
        <BookListingContent></BookListingContent>
        <AuthPagesFooterComponent></AuthPagesFooterComponent>
      </FormikProvider>
      <Box height="60px"></Box>
    </main>
  );
}
