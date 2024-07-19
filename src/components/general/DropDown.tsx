"use client";

import {
  Button,
  Circle,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import CheckedIcon from "../icons/CheckedIcon";

interface DropDownProps {
  data: { label: string; value: string }[];
  label: string;
  onChange: (val: string) => void;
}

const DropDown = (props: DropDownProps) => {
  const { data, label, onChange } = props;
  const [selection, setSelection] = useState<string>();
  return (
    <Menu matchWidth>
      <MenuButton
        as={Button}
        variant={"outline"}
        bg={"shade.black"}
        border={"1px solid "}
        borderColor={"grey.600"}
        color={"grey.400"}
        fontSize={"0.875rem"}
        px={"1rem"}
        py={"0.75rem"}
        fontWeight={400}
        minWidth="8.75rem"
      >
        <Flex
          alignItems={"center"}
          gap={"0.75rem"}
          w={"full"}
          justifyContent={"space-between"}
        >
          <Text>{label}</Text>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList
        minWidth="8.75rem"
        bg={"shade.black"}
        border={"1px solid "}
        borderColor={"grey.600"}
        color={"grey.400"}
        fontSize={"0.875rem"}
      >
        <MenuOptionGroup
          onChange={(value) => {
            onChange(value as string);
            setSelection(value as string);
          }}
        >
          {data?.map((datum) => {
            const isSelected = datum.value === selection;
            return (
              <MenuItemOption
                key={datum.value}
                bg={"shade.black"}
                value={datum.value}
                icon={null}
              >
                <Flex
                  gap={"1.25rem"}
                  w={"full"}
                  justifyContent={"space-between"}
                >
                  <Text>{datum.label}</Text>
                  {isSelected && (
                    <Circle rounded={"full"}>
                      <CheckedIcon boxSize="1rem" />
                    </Circle>
                  )}
                </Flex>
              </MenuItemOption>
            );
          })}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default DropDown;
