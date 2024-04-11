import {
  Circle,
  Divider,
  Flex,
  HStack,
  IconProps,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BookIcon from "../icons/BookIcon";
import UserIcon from "../icons/UserIcon";
import GenreIcon from "../icons/GenreIcon";
import MapMarker from "../icons/MapMarker";

export interface ISearchResultItem {
  title: string;
  category: "book" | "author" | "genre" | "location";
  foundInCount: number;
  foundIn: "locations" | "books";
}

const SearchResultItem = ({
  title,
  category,
  foundIn,
  foundInCount,
}: ISearchResultItem) => {
  const icons: Record<
    ISearchResultItem["category"],
    (props: IconProps) => React.JSX.Element
  > = {
    book: BookIcon,
    author: UserIcon,
    genre: GenreIcon,
    location: MapMarker,
  };
  return (
    <Flex gap={"0.75rem"}>
      <Flex
        bg={"shade.black"}
        border={"1px"}
        borderColor={"grey.600"}
        p={"0.75rem"}
        color={"grey.400"}
        display={"flex"}
        gap={"0.5rem"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"3rem"}
        height={"3rem"}
        rounded={"full"}
      >
        {icons[category]({ boxSize: "1rem" })}
      </Flex>
      <Stack spacing={"0.25rem"}>
        <Text
          color={"shade.white"}
          fontSize={"1rem"}
          fontStyle={"normal"}
          fontWeight={700}
          lineHeight={"145%"}
        >
          {title}
        </Text>
        <HStack spacing={"1rem"}>
          <Text
            color={"grey.400"}
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
            textTransform={"capitalize"}
          >
            {category}
          </Text>

          <Text
            color={"grey.400"}
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            {foundInCount} {foundIn}
          </Text>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default SearchResultItem;
