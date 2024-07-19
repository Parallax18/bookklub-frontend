// Input.tsx

import React from 'react';
import { Box, FormErrorMessage, Textarea, Stack, Text } from '@chakra-ui/react';
import { ErrorMessage, Field } from 'formik';
interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  name: string;
  description?: string;
  height?: string;
}

const ReusableTextarea: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  name,
  height,
  description,
}) => {
  return (
    <Stack spacing={'0.25rem'} style={{ color: '#FAF9F6' }}>
      <Text fontSize="14px" fontWeight={500}>
        {label}
      </Text>

      <Field
        as={Textarea}
        style={{ caretColor: '#90BCA7' }}
        p="25px"
        height={height || '6rem'}
        backgroundColor="shade.black"
        fontSize="14px"
        _hover={{ borderColor: '#90BCA7' }}
        _placeholder={{
          color: 'grey.400',
        }}
        borderColor="grey.600"
        _focus={{
          boxShadow: 'none',
          borderColor: 'primary.200',
          border: '1px solid primary.200',
        }}
        // onChange={handleChange}
        placeholder={placeholder}
        value={value}
        name={name}
        resize="none"
      />

      <ErrorMessage
        component={Text}
        render={(err) => (
          <Text color={'error.200'} fontSize={'xs'}>
            {err}
          </Text>
        )}
        name={name}
      />
      {description && (
        <Box fontSize="14px" color="grey.400" lineHeight="1.45">
          {description}
        </Box>
      )}
    </Stack>
  );
};

export default ReusableTextarea;
