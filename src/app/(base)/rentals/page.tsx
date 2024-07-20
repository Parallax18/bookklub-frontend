"use client";
import DropDown from "@/components/general/DropDown";
import EmptyRentedOut from "@/components/Rentals/EmptyRentedOut";
import { Center, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const RentalsPage = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} mb={"1rem"}>
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
          { label: "Rented Out", value: "OUTBOUND_RENTAL" },
          { label: "Rented In", value: "INBOUND_RENTAL" },
        ]}
        label="Rental"
        onChange={(val) => console.log(val)}
      />
      <Center px={"1rem"} h={"60vh"} my={"auto"}>
        <EmptyRentedOut />
      </Center>
    </>
  );
};

export default RentalsPage;
