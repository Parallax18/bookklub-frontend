'use client';

import AuthPagesFooterComponent from '@/components/general/AuthPagesFooterComponent';
import * as Yup from 'yup';
import BookListingHeader from '@/components/BookListing/BookListingHeader';
import BookListingContent from '@/components/BookListing/BooklistingContent';
import { FormikProvider, useFormik } from 'formik';

export default function NewListing() {
  const handleSubmit = (value: any, next: any) => {
    console.log({ value, next });
  };
  const formik = useFormik({
    initialValues: {
      bookName: '',
      authorName: '',
      bookLocation: '',
      rentDuration: '',
      rentInfo: '',
    },
    onSubmit: handleSubmit,
    validationSchema: Yup.object().shape({
      bookName: Yup.string().required('Book name is required'),
      authorName: Yup.string().required('Author name is required'),
      bookLocation: Yup.string().required("Book's location is required"),
      rentDuration: Yup.number().required('Rent duration is required'),
      rentInfo: Yup.string(),
    }),
  });

  return (
    <main>
      <FormikProvider value={formik}>
        <BookListingHeader formik={formik}></BookListingHeader>
        <BookListingContent formik={formik}></BookListingContent>
        <AuthPagesFooterComponent></AuthPagesFooterComponent>
      </FormikProvider>
    </main>
  );
}
