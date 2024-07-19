import React, { useState } from "react";
import {
  Text,
  Stack,
  Box,
  Flex,
  Button,
  Spacer,
  Grid,
  GridItem,
  Img,
} from "@chakra-ui/react";
import PictureAddIcon from "../icons/PictureAddIcon";
import PictureIcon from "../icons/PictureIcon";
import InternetIcon from "../icons/InternetIcon";

interface PictureUploadProps {
  label: string;
  description?: string;
  placeholder?: string;
  maxFileSizeInMB: string;
  name?: string;
  onSecondaryButtonClick?: () => void;
}
const PictureUpload: React.FC<PictureUploadProps> = ({
  label,
  description,
  name,
  placeholder,
  maxFileSizeInMB,
  onSecondaryButtonClick,
}) => {
  const [file, setFile] = useState(null);
  const bookavailable = true;
  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png, image/jpeg";
    input.click();
    input.addEventListener("change", (e: any) => {
      const file = e.target.files[0];
      setFile(file);
    });
  };
  const handleDeleteImage = () => {
    setFile(null);
  };
  return (
    <Stack spacing={"0.25rem"} style={{ color: "#FAF9F6" }}>
      <Text fontSize="14px" fontWeight={500}>
        {label}
      </Text>
      {file ? (
        <Grid
          templateColumns="169px 1fr"
          templateRows={"169px"}
          gap={"16px"}
          alignItems={"center"}
        >
          <GridItem>
            <Img
              src={URL.createObjectURL(file)}
              objectFit={"cover"}
              objectPosition={"center"}
              height={"100%"}
              width={"100%"}
            />
          </GridItem>
          <GridItem>
            <Stack gap={"12px"}>
              <Button onClick={handleSelectImage} variant={"rounded"}>
                Change Picture
              </Button>
              <Button
                onClick={handleDeleteImage}
                color={"error.200"}
                variant={"roundedTransparent"}
              >
                Delete picture
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      ) : (
        <Box
          borderStyle="dashed"
          p="16px"
          borderRadius="6px"
          style={{ caretColor: "#90BCA7", border: "1px dashed #475367" }}
          backgroundColor="shade.black"
          fontSize="14px"
        >
          <Stack spacing="12px">
            <Flex
              align="center"
              justify="center"
              backgroundColor="#DEEBE5"
              height="36px"
              width="36px"
              borderRadius="50%"
              margin="0 auto"
            >
              <PictureIcon />
            </Flex>
            <Box textAlign="center">
              <Text fontWeight="500" color="shade.white" mb="4px">
                {placeholder}
              </Text>
              <Text color="grey.400" fontSize="12px">
                {" "}
                Picture should not be more than {maxFileSizeInMB}MB
              </Text>
            </Box>
            <Flex gap="8px" align="center" wrap="wrap">
              <Button
                height="36px"
                borderRadius="32px"
                onClick={handleSelectImage}
              >
                <Flex gap="8px">
                  <PictureAddIcon height="16px" /> <Text> Upload Picture</Text>
                </Flex>
              </Button>
              <Spacer />
              <Text>OR</Text>
              <Spacer />
              <Button
                height="36px"
                variant="roundedTransparent"
                onClick={onSecondaryButtonClick}
              >
                <Flex gap="8px">
                  <InternetIcon height="16px" /> <Text> Search online</Text>
                </Flex>
              </Button>
            </Flex>
          </Stack>
        </Box>
      )}
      {/* <ErrorMessage
      component={Text}Picture
      render={(err) => (
        <Text color={'error.200'} fontSize={'xs'}>
          {err}
        </Text>
      )}
      name={name}
    /> */}
      {description && (
        <Box fontSize="14px" color="grey.400" lineHeight="1.45">
          {description}
        </Box>
      )}{" "}
    </Stack>
  );
};

export default PictureUpload;
