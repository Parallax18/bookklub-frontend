"use client";

import BottomNav from "@/components/layout/BottomNav";
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
        <Box
          width={"100%"}
          maxW={"458px"}
          minH={"max-content"}
          position={"relative"}
        >
          <Box p={"1rem"} w={"full"}>
            {children}
          </Box>
          <BottomNav />
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default ChakraSetup;
