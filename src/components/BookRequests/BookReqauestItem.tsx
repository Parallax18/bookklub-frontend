import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ChatIcon from "../icons/ChatIcon";
import CloseIcon from "../icons/CloseIcon";
import CheckMark from "../icons/CheckMark";

const ApprovedRequestActions = () => {
  return (
    <Flex mt={"0.75rem"}>
      <Button variant={"outlined"} py={"0.75rem"} px={"1rem"}>
        View rent details
      </Button>
      <Button
        border={"none"}
        color={"shade.white"}
        bg={"none"}
        gap={"0.5rem"}
        py={"0.75rem"}
        px={"1rem"}
      >
        <ChatIcon boxSize={"1.5rem"} />
        <Text fontSize={"1rem"}>Send a message</Text>
      </Button>
    </Flex>
  );
};

const SentRequestActions = () => {
  return (
    <Flex mt={"0.75rem"} w={"full"}>
      <Button variant={"outlined"} py={"0.75rem"} px={"1rem"} w={"full"}>
        Withdraw request
      </Button>
    </Flex>
  );
};

const ReceivedRequestActions = () => {
  return (
    <Flex mt={"0.75rem"} w={"full"}>
      <Button
        variant={"outlined"}
        py={"0.75rem"}
        px={"1rem"}
        w={"full"}
        gap={"0.5rem"}
      >
        <CheckMark boxSize={"1.5rem"} />
        <Text fontSize={"1rem"}>Approve</Text>
      </Button>
      <Button
        border={"none"}
        color={"shade.white"}
        bg={"none"}
        gap={"0.5rem"}
        py={"0.75rem"}
        px={"1rem"}
        w={"full"}
      >
        <CloseIcon boxSize={"1.5rem"} />
        <Text fontSize={"1rem"}>Decline</Text>
      </Button>
    </Flex>
  );
};

const DeclinedRequestActions = () => {
  return (
    <Flex mt={"0.75rem"} w={"full"}>
      <Button variant={"outlined"} py={"0.75rem"} px={"1rem"} w={"full"}>
        Resend request
      </Button>
    </Flex>
  );
};
export const BookRequestStates = [
  "APPROVED",
  "SENT",
  "RECEIVED",
  "DECLINED",
] as const;
export type BookRequestState = (typeof BookRequestStates)[number];
export interface BookRequestItemProps {
  bookName: string;
  ownerName?: string;
  senderName?: string;
  type: BookRequestState;
  timeAndDate: string;
}

const getContent = ({
  bookName,
  ownerName,
  senderName,
}: Pick<BookRequestItemProps, "bookName" | "ownerName" | "senderName">) => {
  const Content: Record<
    BookRequestState,
    { body: string; actions: () => React.JSX.Element }
  > = {
    APPROVED: {
      body: `Your request for ${bookName} has been approved by ${ownerName}. You can connect and collect book.`,
      actions: ApprovedRequestActions,
    },
    SENT: {
      body: `Your request for ${bookName} has been sent to ${ownerName}.`,
      actions: SentRequestActions,
    },
    DECLINED: {
      body: `Your request for ${bookName} has been declined by ${ownerName}.`,
      actions: DeclinedRequestActions,
    },
    RECEIVED: {
      body: `You received a new request for ${bookName} from ${senderName}.`,
      actions: ReceivedRequestActions,
    },
  };

  return Content;
};

const BookRequestItem = (props: BookRequestItemProps) => {
  const { bookName, ownerName, timeAndDate, senderName, type } = props;
  return (
    <Stack>
      <Text color={"shade.white"} fontSize={"1rem"} lineHeight={"1.45rem"}>
        {getContent({ bookName, ownerName, senderName })[type].body}
      </Text>
      <Text color={"grey.400"} fontSize={"0.75rem"} lineHeight={"1.0875rem"}>
        {timeAndDate}
      </Text>
      <>{getContent({ bookName, ownerName, senderName })[type].actions()}</>
    </Stack>
  );
};

export default BookRequestItem;
