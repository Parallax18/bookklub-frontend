import { Stack, Text, Box } from '@chakra-ui/react';
import AsyncSelect from 'react-select/async';
import React, { useState } from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';
import { myImplomentation } from '../../utils/osmAutocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { reactSelectStyles, reactSelectTheme } from '@/utils/reactSelectStyles';
// 'chakra-ui-google-places-autocomplete';
interface IPlacesAutocompleteComponent {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  description: string;
}

const CustomPlaceAutoCompleteComponent: React.FC<any> = ({
  placeholder,
  field,
}) => {
  const { setFieldValue } = useFormikContext();
  return (
    <AsyncSelect
      isClearable
      placeholder={placeholder}
      onChange={(e) => {
        console.log({ e });
        setFieldValue(field.name, e?.label);
      }}
      loadOptions={
        (async (data: string, callback: any) => {
          callback(
            (await myImplomentation(data)).map(
              ({ displayName, coordinates, name }: any) => ({
                label: displayName,
                name,
                coordinate: { lat: coordinates?.[0], lng: coordinates?.[1] },
              })
            )
          );
        }) as any
      }
      theme={reactSelectTheme}
      styles={reactSelectStyles}
    />
  );
};

const PlacesAutocompleteComponent: React.FC<IPlacesAutocompleteComponent> = ({
  label,
  name,
  placeholder,
  description,
}) => {
  return (
    <Stack spacing={'0.25rem'} style={{ color: '#FAF9F6' }}>
      <Text fontSize="14px" fontWeight={500}>
        {label}
      </Text>
      <Field
        placeholder={placeholder}
        name={name}
        component={CustomPlaceAutoCompleteComponent}
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

export default PlacesAutocompleteComponent;
