'use client';
import { Flex, Spacer, Box, Grid, GridItem } from '@chakra-ui/react';
import AuthPagesFooterIcon from './AuthPagesFooterIcon';
import HomeIcon from '../icons/HomeIcon';
import BookIcon from '../icons/BookIcon';
import BellIcon from '../icons/BellIcon';
import CrossIcon from '../icons/CrossIcon';
import ChatIcon from '../icons/ChatIcon';
import { usePathname } from 'next/navigation';
export default function AuthPagesFooterComponent() {
  const pathname = usePathname();
  return (
    <Grid
      style={{
        position: 'fixed',
        inset: 'auto 0 0',
        maxWidth: '426px',
        margin: 'auto',
        borderRadius: '8px 8px 0 0',
      }}
      px={'16px'}
      background={'shade.black'}
      templateColumns={'repeat(5, minmax(0, 1fr))'}
    >
      <GridItem>
        <AuthPagesFooterIcon text="Home" route="/" active={pathname === '/'}>
          <HomeIcon />
        </AuthPagesFooterIcon>
      </GridItem>

      <GridItem>
        <AuthPagesFooterIcon text="Rentals" route="#">
          <BookIcon />
        </AuthPagesFooterIcon>
      </GridItem>

      <GridItem>
        <AuthPagesFooterIcon
          text="List a book"
          route="/new-listing"
          active={pathname.includes('/new-listing')}
        >
          <CrossIcon />
        </AuthPagesFooterIcon>
      </GridItem>

      <GridItem>
        <AuthPagesFooterIcon text="Notifications" route="#">
          <BellIcon />
        </AuthPagesFooterIcon>
      </GridItem>

      <GridItem>
        <AuthPagesFooterIcon text="Messages" route="#">
          <ChatIcon />
        </AuthPagesFooterIcon>
      </GridItem>
    </Grid>
  );
}
