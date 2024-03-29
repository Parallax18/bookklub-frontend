"use client";

import { theme } from "@/theme";
import { ChakraProvider, Box, Center } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { DM_Sans } from "next/font/google";
import React, { useEffect } from "react";

interface ChakraSetupProps {
  children: React.ReactNode;
}

const dm_sans = DM_Sans({ subsets: ["latin"] });

const ChakraSetup = ({ children }: ChakraSetupProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Center className={dm_sans.className}>
        <Box width={["100%", "25%"]} p={"1rem"} height={"max-content"}>
          {children}
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default ChakraSetup;
