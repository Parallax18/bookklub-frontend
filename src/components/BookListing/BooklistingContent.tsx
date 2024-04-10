"use client";
import { Box, Stack, Button, useDisclosure } from "@chakra-ui/react";

import ReusableInput from "../general/Input";
import ReusableTextarea from "../general/ReusableTextArea";
import PictureUpload from "./PictureUploadComponent";
import BottomDrawer from "../general/BottomDrawer";
import { useFormikContext } from "formik";
import { IBooklistingForm } from "@/app/new-listing/page";
import WebSearchResults from "./WebSearchResults";

const BookListingContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { values, handleSubmit } = useFormikContext<IBooklistingForm>();
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Stack spacing={"16px"}>
          <ReusableInput
            label="Book name"
            value={values.bookName}
            placeholder="eg. Think and grow rich"
            type="text"
            name="bookName"
          />
          <ReusableInput
            label="Author name"
            value={values.authorName}
            placeholder="e.g. Napoleon Hill"
            type="text"
            name="authorName"
          />
          <ReusableInput
            label="Book location"
            value={values.bookLocation}
            placeholder="e.g. 23, Langley Crescent, Idumota, Lagos"
            type="text"
            name="bookLocation"
          />
          <ReusableInput
            label="Rent duratiom"
            value={values.rentDuration.toString()}
            placeholder="e.g. 30"
            type="number"
            name="rentDuration"
            sideText="Days"
            description="This states the total amount of time (days) that a person can rent the book after the rent date"
          />
          <ReusableTextarea
            label="Rent info (optional)"
            value={values.rentInfo}
            placeholder="Give an extra info that would be useful for renters"
            name="rentInfo"
            description="Provide any extra information, note, caution that anyone renting this book should know"
          />
          <PictureUpload
            label="Add book cover"
            placeholder="Upload the book cover here"
            maxFileSizeInMB="2"
            onSecondaryButtonClick={() => {
              onOpen();
            }}
          />
        </Stack>
      </Box>
      <BottomDrawer
        isOpen={isOpen}
        onClose={onClose}
        title={values.bookName}
        subTitle={"Web results"}
        closeButton={
          <Button borderRadius="2rem" padding="0.5rem 0.75rem">
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
          ]}
        />
      </BottomDrawer>
    </form>
  );
};
export default BookListingContent;
