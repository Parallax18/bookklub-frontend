import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import MapMarker from "../icons/MapMarker";
import StarIcon from "../icons/StarIcon";

export interface IBook {
  title: string;
  author: string;
  genre: string;
  state: string;
  country: string;
  rating: string;
  coverImg: string;
  ownerName: string;
  ownerPhone: string;
  ownerLocation: string;
  description: string;
  rentInfo: string;
}

export interface IBookItemCard {
  title: string;
  author: string;
  state: string;
  country: string;
  rating: string;
  coverImg: string;
  onClick: () => void;
}

const BookItemCard = ({
  title,
  author,
  state,
  country,
  rating,
  onClick,
  coverImg,
}: IBookItemCard) => {
  return (
    <Box
      w={"full"}
      bg={"shade.black"}
      padding={"0.75rem"}
      rounded={"0.75rem"}
      onClick={onClick}
    >
      <Box height={"12.5rem"} w={"full"} position={"relative"}>
        <Image
          src={coverImg}
          alt=""
          fill
          style={{ objectFit: "cover", borderRadius: "0.5rem" }}
        />
      </Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        mt={"1rem"}
      >
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
          <Text
            color={"grey.400"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            by {author}
          </Text>
          <Flex color={"grey.400"} alignItems={"center"}>
            <MapMarker boxSize={"1rem"} />
            <Text
              fontSize={"0.75rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              {state}, {country}
            </Text>
          </Flex>
        </Stack>
        <Flex alignItems={"center"} gap={"0.25rem"}>
          <Text
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
            color={"grey.400"}
          >
            {rating}
          </Text>
          <StarIcon boxSize={"1rem"} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default BookItemCard;
