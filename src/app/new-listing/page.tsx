'use client';

import AuthPagesFooterComponent from '@/components/general/AuthPagesFooterComponent';
import BookListingHeader from '@/components/BookListing/BookListingHeader';
import BookListingContent from '@/components/BookListing/BooklistingContent';

export default function newListing() {
  return (
    <main>
      <BookListingContent></BookListingContent>
      <AuthPagesFooterComponent></AuthPagesFooterComponent>
    </main>
  );
}
