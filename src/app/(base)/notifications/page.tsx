"use client";

import BookRequestItem, {
  BookRequestItemProps,
  BookRequestState,
  BookRequestStates,
} from "@/components/BookRequests/BookReqauestItem";
import EmptyRequests from "@/components/BookRequests/EmptyRequests";
import PillBar from "@/components/general/PillBar";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import NotificationItem from "@/components/Notifications/NotificationItem";
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

const Notifications = () => {
  const router = useRouter();
  const [filterBy, setFilterBy] = useState<BookRequestState | "ALL">("ALL");
  const requests = dummyRequests.filter((_req) =>
    filterBy === "ALL" ? _req.type : _req.type === filterBy
  );
  return (
    <>
      <Box>
        <Text
          color={"shade.white"}
          fontSize={"1.25rem"}
          fontStyle={"normal"}
          fontWeight={700}
          lineHeight={"145%"}
          mt={"1rem"}
        >
          Notifications
        </Text>
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
            <NotificationItem key={req.timeAndDate} {...req} />
          ))
        )}
      </Stack>
    </>
  );
};

export default Notifications;
