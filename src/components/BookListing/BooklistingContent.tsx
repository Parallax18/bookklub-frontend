"use client";
import { Box, Stack, Button, useDisclosure, Text } from "@chakra-ui/react";

import ReusableInput from "../general/Input";
import ReusableTextarea from "../general/ReusableTextArea";
import PictureUpload from "./PictureUploadComponent";
import BottomDrawer from "../general/BottomDrawer";
import { useFormikContext } from "formik";
import { IBooklistingForm } from "@/app/(base)/new-listing/page";
import WebSearchResults from "./WebSearchResults";
import CustomSelect from "../general/CustomSelect";
import {
  useGetAllCountries,
  useGetAllStates,
} from "@/api-services/country-list";

const BookListingContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: draftDialogIsOpen,
    onOpen: openDraftDialog,
    onClose: closeDraftDialog,
  } = useDisclosure();
  const { data: countries } = useGetAllCountries();
  const { data: states } = useGetAllStates();
  const { values, handleSubmit, setFieldValue } =
    useFormikContext<IBooklistingForm>();
  return (
    <form onSubmit={handleSubmit}>
      <Box pb={"1rem"}>
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
                  (i) => i.name.toLowerCase() === values.country.toLowerCase()
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
          urls={[
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lighting.jpeg?alt=media&token=43c434cf-19a3-404d-bf02-41453b4fbc1b",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lady.jpeg?alt=media&token=25156b8e-f42d-4409-9a7e-2ea984bd5aa8",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/earrings.jpeg?alt=media&token=dbc6a50e-8330-4d55-88ba-b1298db27b74",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/flashy.jpeg?alt=media&token=5ee8efcc-ef77-4c06-b19d-10d7c2499bd5",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lighting.jpeg?alt=media&token=43c434cf-19a3-404d-bf02-41453b4fbc1b",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lady.jpeg?alt=media&token=25156b8e-f42d-4409-9a7e-2ea984bd5aa8",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/earrings.jpeg?alt=media&token=dbc6a50e-8330-4d55-88ba-b1298db27b74",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/flashy.jpeg?alt=media&token=5ee8efcc-ef77-4c06-b19d-10d7c2499bd5",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lighting.jpeg?alt=media&token=43c434cf-19a3-404d-bf02-41453b4fbc1b",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lady.jpeg?alt=media&token=25156b8e-f42d-4409-9a7e-2ea984bd5aa8",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/earrings.jpeg?alt=media&token=dbc6a50e-8330-4d55-88ba-b1298db27b74",
            "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/flashy.jpeg?alt=media&token=5ee8efcc-ef77-4c06-b19d-10d7c2499bd5",
          ].map((link, index) => ({ id: index, url: link }))}
        />
      </BottomDrawer>
      <BottomDrawer
        isOpen={draftDialogIsOpen}
        onClose={closeDraftDialog}
        title={"Save this listing in draft"}
      >
        <Stack>
          <Text></Text>
        </Stack>
      </BottomDrawer>
    </form>
  );
};
export default BookListingContent;
