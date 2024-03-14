import React, { ReactNode } from "react";
import ChakraSetup from "./chakra.setup";

const ProviderRoot = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraSetup>
      <>{children}</>
    </ChakraSetup>
  );
};

export default ProviderRoot;
