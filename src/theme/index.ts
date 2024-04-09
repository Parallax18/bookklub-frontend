import { extendTheme } from '@chakra-ui/react';
import { Button } from './button.theme';

export const theme = extendTheme({
  components: {
    Button,
  },
  colors: {
    primary: {
      400: '#599B7B',
      100: '#ACCDBD',
      200: '#90BCA7',
    },
    shade: {
      black: '#1B1C1E',
      white: '#FAF9F6',
    },
    error: {
      200: '#E26E6A',
    },
    success: {
      200: '#5FC381',
    },
    grey: {
      600: '#475367',
      400: '#98A2B3',
    },
  },
});
