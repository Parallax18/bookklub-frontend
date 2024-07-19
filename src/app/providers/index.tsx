"use client";

import React, { ReactNode } from "react";
import ChakraSetup from "./chakra.setup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const ProviderRoot = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraSetup>
        <>{children}</>
      </ChakraSetup>
    </QueryClientProvider>
  );
};

export default ProviderRoot;
