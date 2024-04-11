import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import SearchIcon from "../icons/SearchIcon";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        height={"3.5rem"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pointerEvents="none"
      >
        <SearchIcon boxSize={"1.25rem"} />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search book, author or location..."
        rounded={"2.5rem"}
        height={"3.5rem"}
        border={"1px"}
        borderColor="grey.600"
        bg={"shade.black"}
        _placeholder={{
          color: "grey.400",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "145%",
        }}
        _focus={{
          boxShadow: "none",
          borderColor: "primary.200",
          border: "1px solid primary.200",
        }}
      />
    </InputGroup>
  );
};

export default SearchInput;
