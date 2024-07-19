import React from "react";
import Empty from "../svgs/Empty";
import { VStack, Text } from "@chakra-ui/react";

const EmptyRentedOut = () => {
  return (
    <VStack>
      <Empty />
      <Text
        color={"shade.white"}
        fontSize={"1rem"}
        lineHeight={"1.45rem"}
        textAlign={"center"}
      >
        No books rented out yet. This page displays all the books you have
        rented out to other readers.
      </Text>
    </VStack>
  );
};

export default EmptyRentedOut;
