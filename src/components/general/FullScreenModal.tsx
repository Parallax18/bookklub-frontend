import {
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import React from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

interface IFullScreenModal {
  onClose: ModalProps["onClose"];
  isOpen: ModalProps["isOpen"];
  header: React.JSX.Element;
  children: React.JSX.Element;
}

const FullScreenModal = ({
  onClose,
  isOpen,
  header,
  children,
}: IFullScreenModal) => {
  return (
    <Modal
      onClose={onClose}
      size={"full"}
      isOpen={isOpen}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent
        bgImage={'url("/Template.png")'}
        bgColor={"dark"}
        maxW={"458px"}
      >
        <ModalHeader paddingX={"1rem"}>
          <IconButton
            variant={"roundedTransparent"}
            rounded={"1.25rem"}
            onClick={onClose}
            aria-label="Go back"
            width={"2.75rem"}
            height={"2.75rem"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"shade.black"}
            icon={<ArrowLeftIcon boxSize={"1.25rem"} />}
          />
          <Box color={"grey.400"} mt={"0.75rem"} h={"full"}>
            {header}
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FullScreenModal;
