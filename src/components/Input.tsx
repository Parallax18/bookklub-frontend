// Input.tsx

import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";
interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  type: string;
  onChange: (value: string) => void;
  // You can add more props like placeholder, type, etc. as needed
}

const ReusableInput: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div style={{ color: "#FAF9F6", paddingBottom: "10px" }}>
      <Text fontSize="14px" fontWeight={500} mb="5px">
        {label}
      </Text>
      <Input
        style={{ caretColor: "#90BCA7" }}
        type={type}
        p="25px"
        backgroundColor="#1B1C1E"
        fontSize="14px"
        focusBorderColor="transparent"
        _placeholder={{
          color: "#98A2B3",
        }}
        borderColor="#475367"
        _focus={{
          boxShadow: "none",
          border: "1px solid #90BCA7",
        }}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default ReusableInput;
