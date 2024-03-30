import { Flex, Spacer, Box } from '@chakra-ui/react';
import AuthPagesFooterIcon from './AuthPagesFooterIcon';
import HomeIcon from '../icons/HomeIcon';
import BookIcon from '../icons/BookIcon';
import CrossIcon from '../icons/CrossIcon';
import BellIcon from '../icons/BellIcon';
import ChatIcon from '../icons/ChatIcon';
export default function AuthPagesFooterComponent() {
  return (
    <Flex>
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
