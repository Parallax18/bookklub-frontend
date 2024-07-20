import { Badge, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface PillBarProps {
  data: string[];
  onSelect: (value: string) => void;
  selected: string;
}

const PillBar = (props: PillBarProps) => {
  return (
    <Flex gap={"0.75rem"} mt={"1.5rem"} overflowX={"scroll"}>
      {props.data.map((datum) => {
        const isSelected = props.selected === datum;
        return (
          <Badge
            key={datum}
            bg={isSelected ? "primary.400" : "shade.black"}
            border={isSelected ? "" : "1px"}
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
            onClick={() => props.onSelect(datum)}
          >
            <Text
              color={"shade.white"}
              fontSize={"0.875rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
              textTransform={"capitalize"}
            >
              {datum.toLowerCase()}
            </Text>
          </Badge>
        );
      })}
    </Flex>
  );
};

export default PillBar;
