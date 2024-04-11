import React from "react";
import { Center, Text, VStack } from "@chakra-ui/react";
import EmptySearch from "../svgs/EmptySearch";

const BookSearchEmptyState = () => {
  return (
    <Center justifyContent={"center"} alignItems={"center"} h={"full"}>
      <VStack my={"auto"} height={"max-content"}>
        <EmptySearch />
        <Text
          textAlign={"center"}
          color={"shade.white"}
          fontSize={"1rem"}
          fontStyle={"normal"}
          fontWeight={400}
          lineHeight={"145%"}
        >
          No search history available. Your search history would appear here
          when you have made a search.
        </Text>
      </VStack>
    </Center>
  );
};

export default BookSearchEmptyState;
