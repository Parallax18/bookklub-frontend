// Input.tsx

import React, { RefObject } from "react";
import { Box, FormErrorMessage, Input, Stack, Text } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
export interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  type?: string;
  name: string;
  sideText?: string;
  description?: string;
  ref?: RefObject<HTMLInputElement>;
}

const ReusableInput: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  type,
  name,
  sideText,
  description,
  ref,
}) => {
  return (
    <Stack spacing={"0.25rem"} style={{ color: "#FAF9F6" }}>
      <Text fontSize="14px" fontWeight={500}>
        {label}
      </Text>
      <Box position="relative">
        <Field
          as={Input}
          ref={ref}
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
        {sideText && (
          <Box
            position="absolute"
            inset="50% 25px auto auto"
            fontSize="14px"
            zIndex="2"
            color={value ? "#fff" : "grey.400"}
            transform="auto"
            translateY={"-50%"}
          >
            {" "}
            {sideText}{" "}
          </Box>
        )}
      </Box>
      <ErrorMessage
        component={Text}
        render={(err) => (
          <Text color={"error.200"} fontSize={"xs"}>
            {err}
          </Text>
        )}
        name={name}
      />
      {description && (
        <Box fontSize="14px" color="grey.desc" lineHeight="1.45">
          {description}
        </Box>
      )}
    </Stack>
  );
};

export default ReusableInput;
