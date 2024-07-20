import { Badge, Box, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
export type RentalItemStatus = "ACTIVE" | "OVERDUE";
export type RentalType = "OUTBOUND_RENTAL" | "INBOUND_RENTAL";
export interface IRentalItemBase {
  title: string;
  author: string;
  rentDate: string;
  returnDate: string;
  coverImg: string;
  type: RentalType;
  status: RentalItemStatus;
}

export interface IOutboundRental extends IRentalItemBase {
  type: "OUTBOUND_RENTAL";
  rentees_phone: string;
  rentees_location: string;
  rentees_name: string;
  owner_name?: string;
  owners_phone?: string;
  owners_location?: string;
}

export interface IInboundRental extends IRentalItemBase {
  type: "INBOUND_RENTAL";
  owner_name: string;
  owners_phone: string;
  owners_location: string;
  rentees_phone?: string;
  rentees_location?: string;
  rentees_name?: string;
}

export type IRentalItemProps = IOutboundRental | IInboundRental;

const RentalItem = ({
  title,
  author,
  rentDate,
  returnDate,
  coverImg,
  status,
}: IRentalItemProps) => {
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
    <Box w={"full"} bg={"shade.black"} padding={"0.75rem"} rounded={"0.75rem"}>
      <Box height={"12.5rem"} w={"full"} position={"relative"}>
        <Badge
          position={"absolute"}
          zIndex={1}
          color={colors[status].color}
          bg={colors[status].bg}
          border={"1px solid"}
          borderColor={colors[status].color}
          fontWeight={400}
          rounded={"full"}
          fontSize={"0.75rem"}
          lineHeight={"145%"}
          textTransform={"capitalize"}
          m={"0.75rem"}
        >
          {status.toLowerCase()}
        </Badge>
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
        <Stack spacing={"1rem"} w={"full"}>
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
          </Stack>
          <Flex
            color={"grey.400"}
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"80%"}
          >
            <Stack>
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
                {rentDate}
              </Text>
            </Stack>
            <Stack>
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
                {returnDate}
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default RentalItem;
