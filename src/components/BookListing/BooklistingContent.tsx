"use client";
import { Box, Stack, Button, useDisclosure } from "@chakra-ui/react";

<<<<<<< HEAD
import ReusableInput from '../general/Input';
import ReusableTextarea from '../general/ReusableTextArea';
import PictureUpload from './PictureUploadComponent';
import { useFormikContext } from 'formik';
import SelectInput from '../general/ReusableSelect';
import CustomSelect from '../general/CustomSelect';
const BookListingContent = () => {
  const { handleSubmit, values }: any = useFormikContext();
  const genreOptions = [
    { id: '1', title: 'Fiction' },
    { id: '2', title: 'Sci-Fi' },
    { id: '3', title: 'Self-help' },
    { id: '4', title: 'Business' },
    { id: '5', title: 'Christian' },
  ];
=======
import ReusableInput from "../general/Input";
import ReusableTextarea from "../general/ReusableTextArea";
import PictureUpload from "./PictureUploadComponent";
import BottomDrawer from "../general/BottomDrawer";
import { useFormikContext } from "formik";
import { IBooklistingForm } from "@/app/(base)/new-listing/page";
import WebSearchResults from "./WebSearchResults";

const BookListingContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { values, handleSubmit } = useFormikContext<IBooklistingForm>();
>>>>>>> 7b1c71699652b0a39d93e42981d1c614630f02cc
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Stack spacing={"16px"}>
          <ReusableInput
<<<<<<< HEAD
            label="Book title"
            value={values.title}
=======
            label="Book name"
            value={values.bookName}
>>>>>>> 7b1c71699652b0a39d93e42981d1c614630f02cc
            placeholder="eg. Think and grow rich"
            type="text"
            name="title"
          />
          <ReusableInput
            label="Author name"
<<<<<<< HEAD
            value={values.author}
=======
            value={values.authorName}
>>>>>>> 7b1c71699652b0a39d93e42981d1c614630f02cc
            placeholder="e.g. Napoleon Hill"
            type="text"
            name="author"
          />
          <CustomSelect
            label="Genre"
            data={genreOptions}
            onSelect={() => {}}
            placeholder="Select or enter a genre"
          />
          <ReusableInput
            label="Book location"
<<<<<<< HEAD
            value={values.address}
            placeholder="e.g. 23, Langley Crescent, Idumota"
=======
            value={values.bookLocation}
            placeholder="e.g. 23, Langley Crescent, Idumota, Lagos"
>>>>>>> 7b1c71699652b0a39d93e42981d1c614630f02cc
            type="text"
            name="address"
            description="This displays as the location of the book whenever someone wants to rent it"
          />
          <ReusableInput
<<<<<<< HEAD
            label="Country"
            value={values.country}
            placeholder="e.g. Nigeria"
            type="text"
            name="country"
=======
            label="Rent duratiom"
            value={values.rentDuration.toString()}
            placeholder="e.g. 30"
            type="number"
            name="rentDuration"
            sideText="Days"
            description="This states the total amount of time (days) that a person can rent the book after the rent date"
>>>>>>> 7b1c71699652b0a39d93e42981d1c614630f02cc
          />
          <ReusableInput
            label="State"
            value={values.state}
            placeholder="e.g. Lagos"
            type="text"
            name="state"
          />

          <ReusableTextarea
<<<<<<< HEAD
            label="Book description"
            value={values.description}
            placeholder="Enter a book description"
            name="description"
=======
            label="Rent info (optional)"
            value={values.rentInfo}
            placeholder="Give an extra info that would be useful for renters"
            name="rentInfo"
            description="Provide any extra information, note, caution that anyone renting this book should know"
>>>>>>> 7b1c71699652b0a39d93e42981d1c614630f02cc
          />
          {/* <ReusableTextarea
            label="Book description"
            value={values.description}
            placeholder="Give an extra info that would be useful for renters"
            name="description"
            description="Provide any extra information, note, caution that anyone renting this book should know"
          /> */}
          <PictureUpload
            label="Add book cover"
            placeholder="Upload the book cover here"
            maxFileSizeInMB="2"
<<<<<<< HEAD
            description="This is the book cover that would be displayed. Ensure you select a picture that support the book name and is of high quality"
=======
            onSecondaryButtonClick={() => {
              onOpen();
            }}
>>>>>>> 7b1c71699652b0a39d93e42981d1c614630f02cc
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
