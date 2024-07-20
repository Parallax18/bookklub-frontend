import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import Empty from "../svgs/Empty";
import { BookRequestState } from "./BookReqauestItem";

const EmptyRequests = (props: { type: BookRequestState }) => {
  const Content: Record<BookRequestState, string> = {
    APPROVED:
      "No approved book request available. You would get an approved book request when a sent book request is approved by the renter",
    SENT: "No sent book request available. Your send requests would appear here if you make one",
    RECEIVED:
      "No sent book request available. Your send requests would appear here if you make one",
    DECLINED:
      "No sent book request available. Your send requests would appear here if you make one",
  };
  return (
    <VStack>
      <Empty />
      <Text
        color={"shade.white"}
        fontSize={"1rem"}
        lineHeight={"1.45rem"}
        textAlign={"center"}
      >
        {Content[props.type]}
      </Text>
    </VStack>
  );
};

export default EmptyRequests;
