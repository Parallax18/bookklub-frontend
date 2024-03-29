// Input.tsx

import React from "react";
import { Box, FormErrorMessage, Input, Text } from "@chakra-ui/react";
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
    <div style={{ color: "shade.white", paddingBottom: "10px" }}>
      <Text fontSize="14px" fontWeight={500} mb="5px">
        {label}
      </Text>
      <Field
        as={Input}
        style={{ caretColor: "#90BCA7" }}
        type={type}
        p="25px"
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
      <ErrorMessage className="error-message" name={name} />
    </div>
  );
};

export default ReusableInput;
