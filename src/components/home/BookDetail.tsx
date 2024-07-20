import {
  Badge,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ChatIcon from "../icons/ChatIcon";

import WarningIcon from "../icons/WarningIcon";
import StarIcon from "../icons/StarIcon";
import { IBook } from "./BookItemCard";
import BottomDrawer from "../general/BottomDrawer";
import CloseIcon from "../icons/CloseIcon";
import RequestForm from "../BookRequests/RequestForm";

type BookDetailProps = IBook;

const BookDetail = (props: BookDetailProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <Stack spacing={"1rem"} pb={"5rem"} overflowY={"scroll"}>
        <Stack spacing={"0.25rem"}>
          <Text
            color={"shade.white"}
            fontSize={"1rem"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"145%"}
          >
            {props.title}
          </Text>
          <Text
            color={"grey.400"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            by {props.author}
          </Text>
        </Stack>
        <Box height={"12.5rem"} w={"full"} position={"relative"}>
          <Flex
            position={"absolute"}
            zIndex={1}
            w={"full"}
            justifyContent={"space-between"}
          >
            <Badge
              bg={"grey.50"}
              border={"1px solid"}
              borderColor={"grey.400"}
              fontWeight={400}
              rounded={"full"}
              fontSize={"0.75rem"}
              lineHeight={"145%"}
              textTransform={"capitalize"}
              m={"0.75rem"}
              display={"flex"}
              gap={"0.1875"}
            >
              <Text
                fontSize={"0.75rem"}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={"145%"}
                color={"shade.black"}
              >
                {props.rating}
              </Text>
              <StarIcon boxSize={"1rem"} />
            </Badge>
          </Flex>
          <Image
            src={props.coverImg}
            alt=""
            fill
            style={{ objectFit: "cover", borderRadius: "0.5rem" }}
          />
        </Box>
        <Stack spacing={"0.25rem"}>
          <Text
            color={"grey.400"}
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            Book description
          </Text>
          <Text
            color={"shade.white"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            {props.description}
          </Text>
        </Stack>

        <Stack spacing={"0.25rem"}>
          <Text
            color={"grey.400"}
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            Genre
          </Text>
          <Text
            color={"shade.white"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            {props.genre}
          </Text>
        </Stack>
        <Stack spacing={"0.25rem"}>
          <Text
            color={"grey.400"}
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            Book location
          </Text>
          <Text
            color={"shade.white"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            {props.state}, {props.country}
          </Text>
        </Stack>

        <Stack spacing={"0.25rem"}>
          <Text
            color={"grey.400"}
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            Rent Info
          </Text>
          <Text
            color={"shade.white"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            {props.rentInfo}
          </Text>
        </Stack>
        <Stack spacing={"0.25rem"}>
          <Text
            color={"grey.400"}
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            Owner
          </Text>
          <Text
            color={"shade.white"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            {props.ownerName}
          </Text>
        </Stack>
        <Flex
          color={"grey.400"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"75%"}
        >
          <Stack spacing={"0.25rem"}>
            <Text
              color={"grey.400"}
              fontSize={"0.75rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              Owner&apos;s Phone Number
            </Text>
            <Text
              color={"shade.white"}
              fontSize={"0.875rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              {props.ownerPhone}
            </Text>
          </Stack>
          <Stack spacing={"0.25rem"}>
            <Text
              color={"grey.400"}
              fontSize={"0.75rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              Owner&apos;s location
            </Text>
            <Text
              color={"shade.white"}
              fontSize={"0.875rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              {props.ownerLocation}
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"full"}
        position={"fixed"}
        bottom={0}
        left={0}
      >
        <Flex
          w={"full"}
          maxW={"28.5rem"}
          bg={"#1B1C1EE5"}
          p={"1rem"}
          justifyContent={"center"}
        >
          <Button rounded={"full"} w={"full"} onClick={onOpen}>
            Send book request for this book
          </Button>
        </Flex>
      </Flex>
      <BottomDrawer
        isOpen={isOpen}
        onClose={onClose}
        closeButton={
          <CloseIcon height={"20px"} width={"20px"} onClick={onClose} />
        }
        title={"Send book request"}
      >
        <Stack>
          <RequestForm {...props} />
          <Flex gap={"1rem"} mt={"1.5rem"} pb={"0.5rem"}>
            <Button
              borderRadius="2rem"
              padding="1rem 1.5rem"
              fontSize={"1rem"}
              w={"full"}
              form={"request_form"}
            >
              Send book request
            </Button>
          </Flex>
        </Stack>
      </BottomDrawer>
    </Box>
  );
};

export default BookDetail;
