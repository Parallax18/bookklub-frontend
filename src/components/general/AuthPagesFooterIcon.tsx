import { ReactNode } from 'react';
import { Flex, Text, Link, Box } from '@chakra-ui/react';
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
    <Box
      style={{
        margin: 'auto',
        width: '12px',
        height: '4px',
        borderRadius: '4px',
        translate: '-1px 0',
      }}
      background={active ? 'primary.400' : 'transparent'}
    ></Box>

    <Flex direction={'column'} align={'center'} p={'8px'}>
      {children}
      <Text fontSize={'xs'} mt={'4px'}>
        {text}
      </Text>
    </Flex>
  </Link>
);
export default AuthPagesFooterIcon;
