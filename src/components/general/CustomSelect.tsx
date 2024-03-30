import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";

const CustomSelect = () => {
  return (
    <Box>
      <Text>Select your country</Text>
      <ChevronDownIcon />
    </Box>
  );
};

export default CustomSelect;
