// Input.tsx

import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { Field } from "formik";
interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  type: string;
  // onChange: (value: string) => void;
  name: string;
  // You can add more props like placeholder, type, etc. as needed
}

const ReusableInput: React.FC<InputProps> = ({
  label,
  value,
  // onChange,
  placeholder,
  type,
  name,
}) => {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.value);
  // };

  return (
    <div style={{ color: "#FAF9F6", paddingBottom: "10px" }}>
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
    </div>
  );
};

export default ReusableInput;
