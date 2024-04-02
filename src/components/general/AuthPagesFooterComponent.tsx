'use client';
import { Flex, Spacer, Box } from '@chakra-ui/react';
import AuthPagesFooterIcon from './AuthPagesFooterIcon';
import HomeIcon from '../icons/HomeIcon';
import BookIcon from '../icons/BookIcon';
import CrossIcon from '../icons/CrossIcon';
import BellIcon from '../icons/BellIcon';
import ChatIcon from '../icons/ChatIcon';
export default function AuthPagesFooterComponent() {
  return (
    <Flex
      style={{
        position: 'fixed',
        inset: 'auto 0 0',
        maxWidth: '426px',
        margin: 'auto',
        borderRadius: '8px 8px 0 0',
      }}
      px={'16px'}
      background={'shade.black'}
    >
      <AuthPagesFooterIcon text="Home" route="#">
        <HomeIcon />
      </AuthPagesFooterIcon>
      <Spacer />
      <AuthPagesFooterIcon text="Rentals" route="#">
        <BookIcon />
      </AuthPagesFooterIcon>
      <Spacer />
      <AuthPagesFooterIcon
        text="List a book"
        route="/new-listing"
        active={window.location.pathname.includes('/new-listing')}
      >
        <CrossIcon />
      </AuthPagesFooterIcon>
      <Spacer />
      <AuthPagesFooterIcon text="Notifications" route="#">
        <BellIcon />
      </AuthPagesFooterIcon>
      <Spacer />
      <AuthPagesFooterIcon text="Messages" route="#">
        <ChatIcon />
      </AuthPagesFooterIcon>
    </Flex>
  );
}
