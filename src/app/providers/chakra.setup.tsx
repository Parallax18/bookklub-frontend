"use client";

import { theme } from "@/theme";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import React, { useEffect } from "react";

interface ChakraSetupProps {
  children: React.ReactNode;
}

const ChakraSetup = ({ children }: ChakraSetupProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Box>{children}</Box>
    </ChakraProvider>
  );
};

export default ChakraSetup;
