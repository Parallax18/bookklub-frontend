"use client";

import {
  Badge,
  Box,
  Flex,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import BookItemCard, { IBook } from "@/components/home/BookItemCard";
import MapMarker from "@/components/icons/MapMarker";
import SearchInput from "@/components/general/SearchInput";
import FullScreenModal from "@/components/general/FullScreenModal";

import BookSearch, { bookSearchFilters } from "@/components/home/BookSearch";
import { dummyBooks } from "@/dummy-data";
import BookDetail from "@/components/home/BookDetail";
import { useState } from "react";

export default function Home() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    onOpen: openDetail,
    isOpen: detailIsOpen,
    onClose: closeDetail,
  } = useDisclosure();
  const [selectedBook, setSelectedBook] = useState<IBook>();
  return (
    <>
      <Flex
        w={"full"}
        position={"fixed"}
        top={0}
        left={0}
        justifyContent={"center"}
        zIndex={100}
      >
        <Stack
          color={"grey.400"}
          w={"full"}
          maxW={"28.125rem"}
          p={"1rem"}
          backgroundImage={'url("/Template.png")'}
        >
          <Stack>
            <Text
              color={"shade.white"}
              fontSize={"1.25rem"}
              fontStyle={"normal"}
              fontWeight={700}
              lineHeight={"145%"}
            >
              Hi, Jamil!
            </Text>
            <Flex color={"grey.400"} alignItems={"center"}>
              <MapMarker boxSize={"1rem"} />
              <Text
                fontSize={"0.75rem"}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={"145%"}
              >
                Lagos, Nigeria
              </Text>
            </Flex>
          </Stack>
          <Box onClick={onOpen}>
            <SearchInput />
          </Box>
        </Stack>
      </Flex>
      <VStack mt={"9rem"} mb={"5rem"} spacing={"1rem"}>
        {dummyBooks.map((book) => (
          <BookItemCard
            key={book.title}
            title={book.title}
            author={book.author}
            rating={book.rating}
            country={book.country}
            state={book.state}
            coverImg={book.coverImg}
            onClick={() => {
              setSelectedBook(book);
              openDetail();
            }}
          />
        ))}
      </VStack>
      <FullScreenModal
        isOpen={isOpen}
        onClose={onClose}
        header={
          <Stack spacing={"1rem"}>
            <SearchInput />
            <Flex gap={"0.75rem"} overflowX={"scroll"}>
              {bookSearchFilters.map(({ Icon, title }) => (
                <Badge
                  key={title}
                  bg={"shade.black"}
                  border={"1px"}
                  borderColor={"grey.600"}
                  p={"0.5rem 0.75rem"}
                  rounded={"2rem"}
                  color={"grey.400"}
                  display={"flex"}
                  gap={"0.5rem"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"max-content"}
                  textTransform={"capitalize"}
                >
                  <Icon boxSize={"1rem"} />
                  <Text
                    color={"shade.white"}
                    fontSize={"0.875rem"}
                    fontStyle={"normal"}
                    fontWeight={400}
                    lineHeight={"145%"}
                  >
                    {title}
                  </Text>
                </Badge>
              ))}
            </Flex>
          </Stack>
        }
      >
        <BookSearch />
      </FullScreenModal>
      <FullScreenModal isOpen={detailIsOpen} onClose={closeDetail}>
        {selectedBook ? <BookDetail {...selectedBook} /> : <></>}
      </FullScreenModal>
    </>
  );
}
