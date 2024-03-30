'use client';

import AuthPagesFooterComponent from '@/components/general/AuthPagesFooterComponent';
import BookListingHeader from '@/components/BookListing/BookListingHeader';
import { Flex, Box } from '@chakra-ui/react';

export default function newListing() {
  return (
    <main>
      <BookListingHeader />
      <AuthPagesFooterComponent></AuthPagesFooterComponent>
    </main>
  );
}
