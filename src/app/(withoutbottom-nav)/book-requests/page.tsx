"use client";

import BookRequestItem, {
  BookRequestItemProps,
  BookRequestState,
  BookRequestStates,
} from "@/components/BookRequests/BookReqauestItem";
import EmptyRequests from "@/components/BookRequests/EmptyRequests";
import PillBar from "@/components/general/PillBar";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import { dummyRequests } from "@/dummy-data";
import {
  Badge,
  Box,
  Center,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BookRequests = () => {
  const router = useRouter();
  const [filterBy, setFilterBy] = useState<BookRequestState | "ALL">("ALL");
  const requests = dummyRequests.filter((_req) =>
    filterBy === "ALL" ? _req.type : _req.type === filterBy
  );
  return (
    <>
      <Box>
        <IconButton
          variant={"outlined"}
          rounded={"1.25rem"}
          aria-label="Go back"
          width={"2.75rem"}
          height={"2.25rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"shade.black"}
          icon={<ArrowLeftIcon boxSize={"1.25rem"} />}
          onClick={() => router.back()}
        />
        <Text
          color={"shade.white"}
          fontSize={"1.25rem"}
          fontStyle={"normal"}
          fontWeight={700}
          lineHeight={"145%"}
          mt={"1rem"}
        >
          Book requests
        </Text>
        <PillBar
          data={["ALL", ...BookRequestStates]}
          onSelect={(val) => setFilterBy(val as BookRequestState | "ALL")}
          selected={filterBy}
        />
      </Box>
      <Stack
        gap={"1.5rem"}
        mt={"1.5rem"}
        pb={"1.5rem"}
        overflowY={"scroll"}
        overflowX={"hidden"}
        maxH={"80vh"}
      >
        {requests.length === 0 ? (
          <Center px={"1rem"} h={"60vh"} my={"auto"}>
            <EmptyRequests type={filterBy as BookRequestState} />
          </Center>
        ) : (
          requests.map((req) => (
            <BookRequestItem key={req.timeAndDate} {...req} />
          ))
        )}
      </Stack>
    </>
  );
};

export default BookRequests;
