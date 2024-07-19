import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  ModalProps,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface IBottomDrawer {
  isOpen: ModalProps["isOpen"];
  onClose: ModalProps["onClose"];
  title: string;
  subTitle?: string;
  closeButton?: React.JSX.Element;
  children: React.JSX.Element;
}

const BottomDrawer = ({
  isOpen,
  onClose,
  title,
  subTitle,
  closeButton,
  children,
}: IBottomDrawer) => {
  return (
    <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg={"shade.black"} roundedTop={"1rem"}>
        <DrawerHeader pt={"0.5rem"} display={"flex"} justifyContent={"center"}>
          <Box width={"2.5rem"} height={"0.25rem"} bg={"grey.600"} />
        </DrawerHeader>
        <DrawerBody>
          <Flex
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            mb={"1.5rem"}
          >
            <Stack spacing={"0.5rem"}>
              <Text
                color={"shade.white"}
                fontSize={"1.25rem"}
                fontStyle={"normal"}
                fontWeight={"700"}
                lineHeight={"120%"} /* 1.5rem */
                letterSpacing={"-0.025rem"}
              >
                {title}
              </Text>
              {subTitle && (
                <Text
                  color={"grey.400"}
                  fontSize={"0.875rem"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"145%"} /* 1.5rem */
                >
                  {subTitle}
                </Text>
              )}
            </Stack>
            {closeButton}
          </Flex>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomDrawer;
