import {
  Badge,
  Box,
  Center,
  Flex,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import BookSearchEmptyState from "./BookSearchEmptyState";
import BookIcon from "../icons/BookIcon";
import AllIcon from "../icons/AllIcon";
import UserIcon from "../icons/UserIcon";
import GenreIcon from "../icons/GenreIcon";
import MapMarker from "../icons/MapMarker";
import SearchResultItem, { ISearchResultItem } from "./SearchResultItem";

export const bookSearchFilters = [
  {
    Icon: AllIcon,
    title: "All",
  },
  {
    Icon: BookIcon,
    title: "Book",
  },
  {
    Icon: UserIcon,
    title: "Author",
  },
  {
    Icon: GenreIcon,
    title: "Genre",
  },
  {
    Icon: MapMarker,
    title: "Location",
  },
];

const searchResult: ISearchResultItem[] = [
  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },

  {
    title: "Think and grow rich",
    category: "book",
    foundIn: "locations",
    foundInCount: 32,
  },
  {
    title: "Think James",
    category: "author",
    foundIn: "books",
    foundInCount: 10,
  },
  {
    title: "Think James",
    category: "genre",
    foundIn: "books",
    foundInCount: 10,
  },
];

const BookSearch = () => {
  return (
    <>
      <Stack spacing={"1rem"}>
        <Text
          color={"grey.400"}
          fontSize={"0.875rem"}
          fontStyle={"normal"}
          fontWeight={400}
          lineHeight={"145%"}
        >
          {searchResult.length} search results found
        </Text>
        <Stack spacing={"1rem"}>
          {searchResult.map((i) => (
            <SearchResultItem key={i.title} {...i} />
          ))}
        </Stack>
      </Stack>
      {/* <BookSearchEmptyState /> */}
    </>
  );
};

export default BookSearch;
