// Input.tsx

import React from "react";
import { Box, FormErrorMessage, Input, Stack, Text } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  type?: string;
  name: string;
}

const ReusableInput: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  type,
  name,
}) => {
  return (
    <Stack spacing={"0.25rem"} style={{ color: "#FAF9F6" }}>
      <Text fontSize="14px" fontWeight={500}>
        {label}
      </Text>
      <Field
        as={Input}
        style={{ caretColor: "#90BCA7" }}
        type={type}
        p="25px"
        height={"3.5rem"}
        backgroundColor="shade.black"
        fontSize="14px"
        _hover={{ borderColor: "#90BCA7" }}
        focusBorderColor="transparent"
        _placeholder={{
          color: "grey.400",
        }}
        borderColor="grey.600"
        _focus={{
          boxShadow: "none",
          borderColor: "primary.200",
          border: "1px solid primary.200",
        }}
        // onChange={handleChange}
        placeholder={placeholder}
        value={value}
        name={name}
      />
      <ErrorMessage
        component={Text}
        render={(err) => (
          <Text color={"error.200"} fontSize={"xs"}>
            {err}
          </Text>
        )}
        name={name}
      />
    </Stack>
  );
};

export default ReusableInput;
