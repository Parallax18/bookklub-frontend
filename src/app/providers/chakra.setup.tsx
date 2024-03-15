"use client";

import { ChakraProvider, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { theme } from "../../theme/index";

interface ChakraSetupProps {
  children: React.ReactNode;
}

const ChakraSetup = ({ children }: ChakraSetupProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="button-color-active">{children}</Box>
    </ChakraProvider>
  );
};

export default ChakraSetup;
