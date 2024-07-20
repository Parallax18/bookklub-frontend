"use client";

import * as Yup from "yup";

import { Form, FormikProvider, useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useDisclosure,
  chakra,
} from "@chakra-ui/react";
import {
  useGetAllCountries,
  useGetAllStates,
} from "@/api-services/country-list";
import Link from "next/link";
import CloseIcon from "@/components/icons/CloseIcon";
import ReusableInput from "@/components/general/Input";
import CustomSelect from "@/components/general/CustomSelect";
import ReusableTextarea from "@/components/general/ReusableTextArea";
import PictureUpload from "@/components/BookListing/PictureUploadComponent";
import BottomDrawer from "@/components/general/BottomDrawer";
import WebSearchResults from "@/components/BookListing/WebSearchResults";
import { dummyBooks } from "@/dummy-data";

export interface IBooklistingForm {
  title: string;
  author: string;
  genre: string;
  address: string;
  country: string;
  state: string;
  description: string;
  coverImg: string;
}

export default function NewListing() {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      address: "",
      country: "",
      state: "",
      description: "",
      coverImg: "",
    },
    onSubmit: (values) => console.log({ values }),
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Book title is required"),
      author: Yup.string().required(" Author name is required"),
      genre: Yup.string().required(" Genre is required"),
      address: Yup.string().required("Book location is required"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      description: Yup.string().required("Book description is required"),
      coverImg: Yup.string().required("Book cover is required"),
    }),
  });
  const { isValid, setFieldValue, values, handleSubmit } = formik;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: draftDialogIsOpen,
    onOpen: openDraftDialog,
    onClose: closeDraftDialog,
  } = useDisclosure();
  const { data: countries } = useGetAllCountries();
  const { data: states } = useGetAllStates();

  return (
    <chakra.main pb={"5rem"}>
      <FormikProvider value={formik}>
        <Flex justify={"space-between"} align="center" pb="1rem">
          <CloseIcon height={"24px"} width={"24px"} onClick={openDraftDialog} />

          <Flex color="grey.400" align="center" gap="16px">
            <Box _hover={{ cursor: "pointer" }}>Drafts</Box>
            <Button
              isDisabled={!isValid}
              borderRadius="32px"
              padding="8px 12px"
            >
              List Book
            </Button>
          </Flex>
        </Flex>
        <Form onSubmit={handleSubmit}>
          <Box>
            <Stack spacing={"16px"}>
              <ReusableInput
                label="Book title"
                value={values.title}
                placeholder="eg. Think and grow rich"
                type="text"
                name="title"
              />
              <ReusableInput
                label="Author name"
                value={values.author}
                placeholder="e.g. Napoleon Hill"
                type="text"
                name="author"
              />

              <Stack spacing={"0.25rem"}>
                <Text fontSize="14px" fontWeight={500} color={"shade.white"}>
                  Country
                </Text>
                <CustomSelect
                  onSelect={(value: string) => setFieldValue("country", value)}
                  label="Select a country"
                  placeholder="e.g. Nigeria"
                  data={countries?.map((item) => ({
                    id: item.name,
                    title: item.name,
                    flag: item.flag,
                  }))}
                />
              </Stack>

              <Stack spacing={"0.25rem"}>
                <Text fontSize="14px" fontWeight={500} color={"shade.white"}>
                  State
                </Text>
                <CustomSelect
                  onSelect={(value: string) => setFieldValue("state", value)}
                  label="Select a state"
                  placeholder="Select your state"
                  data={states
                    ?.filter(
                      (i) =>
                        i.name.toLowerCase() === values.country.toLowerCase()
                    )
                    .flatMap((item) =>
                      item.states.map((state) => ({
                        id: state.name,
                        title: state.name,
                      }))
                    )}
                />
              </Stack>

              <ReusableTextarea
                label="Book description"
                value={values.description}
                placeholder="Enter a book description"
                name="description"
              />

              <PictureUpload
                label="Add book cover"
                placeholder="Upload the book cover here"
                maxFileSizeInMB="2"
                description="This is the book cover that would be displayed. Ensure you select a picture that support the book name and is of high quality"
                onSecondaryButtonClick={() => {
                  onOpen();
                }}
              />
            </Stack>
          </Box>
          <BottomDrawer
            isOpen={isOpen}
            onClose={onClose}
            title={values.title}
            subTitle={"Web results"}
            closeButton={
              <Button
                onClick={onClose}
                borderRadius="2rem"
                padding="0.5rem 0.75rem"
              >
                Done
              </Button>
            }
          >
            <WebSearchResults
              urls={dummyBooks.map((book, index) => ({
                id: index,
                url: book.coverImg,
              }))}
            />
          </BottomDrawer>
          <BottomDrawer
            isOpen={draftDialogIsOpen}
            onClose={closeDraftDialog}
            closeButton={
              <CloseIcon
                height={"20px"}
                width={"20px"}
                onClick={closeDraftDialog}
              />
            }
            title={"Save this listing in draft"}
          >
            <Stack>
              <Text
                color={"shade.white"}
                fontSize={"1rem"}
                lineHeight={"1.45rem"}
              >
                You can save this listing and post it later from your drafts
              </Text>
              <Flex gap={"1rem"} mt={"1.5rem"} pb={"0.5rem"}>
                <Button
                  variant={"outlined"}
                  onClick={onClose}
                  borderRadius="2rem"
                  padding="0.5rem 0.75rem"
                  fontSize={"1rem"}
                  w={"full"}
                >
                  Discard
                </Button>
                <Button
                  onClick={onClose}
                  borderRadius="2rem"
                  padding="1rem 1.5rem"
                  fontSize={"1rem"}
                  w={"full"}
                >
                  Save in drafts
                </Button>
              </Flex>
            </Stack>
          </BottomDrawer>
        </Form>
      </FormikProvider>
    </chakra.main>
  );
}
