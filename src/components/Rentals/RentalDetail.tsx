import { Badge, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ChatIcon from "../icons/ChatIcon";
import {
  IInboundRental,
  IOutboundRental,
  IRentalItemProps,
} from "./RentalItem";
import WarningIcon from "../icons/WarningIcon";
import StarIcon from "../icons/StarIcon";

type RentalDetailProps = IOutboundRental | IInboundRental;

const RentalDetail = (props: RentalDetailProps) => {
  const colors = {
    ACTIVE: {
      bg: "success.50",
      color: "success.400",
    },
    OVERDUE: {
      bg: "error.50",
      color: "error.400",
    },
  };
  return (
    <Box>
      <Stack spacing={"1rem"}>
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
              color={colors[props.status].color}
              bg={colors[props.status].bg}
              border={"1px solid"}
              borderColor={colors[props.status].color}
              fontWeight={400}
              rounded={"full"}
              fontSize={"0.75rem"}
              lineHeight={"145%"}
              textTransform={"capitalize"}
              m={"0.75rem"}
            >
              {props.status.toLowerCase()}
            </Badge>
            <Badge
              color={colors[props.status].color}
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
                4.1
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
            {props.type === "INBOUND_RENTAL" ? "Owner" : "Rentee"}
          </Text>
          <Text
            color={"shade.white"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            {props.type === "INBOUND_RENTAL"
              ? props.owner_name
              : props.rentees_name}
          </Text>
        </Stack>
        <Button
          variant={"outlined"}
          color={"shade.white"}
          bg={"shade.black"}
          gap={"0.5rem"}
          py={"0.75rem"}
          px={"1rem"}
        >
          <ChatIcon boxSize={"1.5rem"} />
          <Text fontSize={"1rem"}>
            Send {props.type === "INBOUND_RENTAL" ? "owner" : "rentee"} a
            message
          </Text>
        </Button>
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
              Rent date
            </Text>
            <Text
              color={"shade.white"}
              fontSize={"0.875rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              {props.rentDate}
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
              Return Date
            </Text>
            <Text
              color={"shade.white"}
              fontSize={"0.875rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              {props.returnDate}
            </Text>
          </Stack>
        </Flex>
        <Flex
          color={"grey.400"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Stack spacing={"0.25rem"}>
            <Text
              color={"grey.400"}
              fontSize={"0.75rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              {props.type === "INBOUND_RENTAL"
                ? "Owner's phone number"
                : "Rentee's phone number"}
            </Text>
            <Text
              color={"shade.white"}
              fontSize={"0.875rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              {props.type === "INBOUND_RENTAL"
                ? props.owners_phone
                : props.rentees_phone}
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
              {props.type === "INBOUND_RENTAL"
                ? "Owner's location"
                : "Rentee's location"}
            </Text>
            <Text
              color={"shade.white"}
              fontSize={"0.875rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              {props.returnDate}
              {props.type === "INBOUND_RENTAL"
                ? props.owners_location
                : props.rentees_location}
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Flex
        bg={"warning.900"}
        gap={"0.5rem"}
        padding={"0.5rem"}
        mt={"1.375rem"}
        rounded={"0.25rem"}
      >
        <WarningIcon />
        <Text
          color={"shade.white"}
          fontSize={"0.75rem"}
          lineHeight={"1.0875rem"}
        >
          {props.type === "INBOUND_RENTAL"
            ? "You have 22 days to return the book to the owner"
            : "The rentee has 22 days to expected return date of the book"}
        </Text>
      </Flex>
    </Box>
  );
};

export default RentalDetail;
