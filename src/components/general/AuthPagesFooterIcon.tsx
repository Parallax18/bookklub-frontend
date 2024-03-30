import { ReactNode } from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
const AuthPagesFooterIcon = ({
  children,
  text,
  route,
  active,
}: {
  children: ReactNode;
  text: string;
  route: string;
  active?: boolean;
}) => (
  <Link
    color={active ? 'primary.400' : 'grey.400'}
    _hover={{
      color: 'primary.400',
    }}
    href={route}
  >
    <Flex direction={'column'} align={'center'}>
      {children}
      <Text fontSize={'xs'}>{text}</Text>
    </Flex>
  </Link>
);
export default AuthPagesFooterIcon;
