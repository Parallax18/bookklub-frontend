'use client';

import AuthPagesFooterComponent from '@/components/general/AuthPagesFooterComponent';
import * as Yup from 'yup';
import BookListingHeader from '@/components/BookListing/BookListingHeader';
import BookListingContent from '@/components/BookListing/BooklistingContent';
import { FormikProvider, useFormik } from 'formik';
import { Box } from '@chakra-ui/react';

export interface IBooklistingForm {
  title: string;
  author: string;
  genre: string;
  address: string;

  description: string;
  coverImg: string;
}

export default function NewListing() {
  const handleSubmit = (value: any, next: any) => {
    console.log({ value, next });
  };
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      genre: '',
      address: '',

      description: '',
      coverImg: '',
    },
    onSubmit: handleSubmit,
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Book title is required'),
      author: Yup.string().required(' Author name is required'),
      genre: Yup.string().required(' Genre is required'),
      address: Yup.string().required('Book location is required'),
      description: Yup.string().required('Book description is required'),
      coverImg: Yup.string().required('Book cover is required'),
    }),
  });

  return (
    <main>
      <FormikProvider value={formik}>
        <BookListingHeader></BookListingHeader>
        <BookListingContent></BookListingContent>
        {/* <AuthPagesFooterComponent></AuthPagesFooterComponent> */}
      </FormikProvider>
      <Box height="60px"></Box>
    </main>
  );
}
