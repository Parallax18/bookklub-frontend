"use client";
import DropDown from "@/components/general/DropDown";
import EmptyRentedOut from "@/components/Rentals/EmptyRentedOut";
import RentalItem, {
  RentalItemStatus,
  RentalType,
} from "@/components/Rentals/RentalItem";
import { dummyRentals } from "@/dummy-data";
import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const RentalsPage = () => {
  const [filterBy, setFilterBy] = useState<RentalType>("INBOUND_RENTAL");
  const rentals = dummyRentals.filter((_rental) => _rental.type === filterBy);
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
          w={"full"}
          maxW={"28.125rem"}
          p={"1rem"}
          backgroundImage={'url("/Template.png")'}
        >
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"1rem"}
          >
            <Text
              color={"shade.white"}
              fontSize={"1.25rem"}
              fontStyle={"normal"}
              fontWeight={700}
              lineHeight={"145%"}
            >
              Rentals
            </Text>
            <Link href={"/book-requests"}>
              <Text
                color={"grey.400"}
                textDecoration={"underline"}
                fontSize={"0.875rem"}
                lineHeight={"145%"}
              >
                Book Requests
              </Text>
            </Link>
          </Flex>

          <DropDown
            data={[
              { label: "Rented In", value: "INBOUND_RENTAL" },
              { label: "Rented Out", value: "OUTBOUND_RENTAL" },
            ]}
            label="Rental"
            onChange={(val) => setFilterBy(val as RentalType)}
          />
        </Stack>
      </Flex>
      <Box mt={"9rem"} pb={"5rem"}>
        {rentals.length === 0 ? (
          <Center px={"1rem"} h={"60vh"} my={"auto"}>
            <EmptyRentedOut />
          </Center>
        ) : (
          <Stack>
            {rentals.map((rental) => (
              <RentalItem {...rental} key={rental.rentDate} />
            ))}
          </Stack>
        )}
      </Box>
    </>
  );
};

export default RentalsPage;
