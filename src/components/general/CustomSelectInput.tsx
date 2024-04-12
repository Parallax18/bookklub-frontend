import CreatableSelect from 'react-select/creatable';
import { useFormikContext, Field, ErrorMessage } from 'formik';
import { Stack, Text } from '@chakra-ui/react';
import { reactSelectStyles, reactSelectTheme } from '@/utils/reactSelectStyles';
interface CustomSelectInputProps {
  options: { value: string; label: string; color?: string }[];
  placeholder: string;
  name: string;
  value: string;
  label: string;
}
const CustomCreateSelect: React.FC<any> = ({
  options,
  value,
  field,
  placeholder,
}) => {
  const { setFieldValue } = useFormikContext();
  return (
    <CreatableSelect
      isClearable
      options={options}
      onChange={(e) => {
        setFieldValue(field.name, e?.value);
      }}
      placeholder={placeholder}
      name={field.name}
      value={options?.find((option: any) => option.value === field.value)}
      required
      theme={reactSelectTheme}
      styles={reactSelectStyles}
    />
  );
};

const CustomSelectInput: React.FC<CustomSelectInputProps> = ({
  options,
  placeholder,
  name,
  value,
  label,
}) => (
  <Stack spacing={'0.25rem'} style={{ color: '#FAF9F6' }}>
    <Text fontSize="14px" fontWeight={500}>
      {label}
    </Text>
    <Field
      placeholder={placeholder}
      name={name}
      value={value}
      component={CustomCreateSelect}
      options={options}
      label={label}
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
  </Stack>
);
export default CustomSelectInput;
