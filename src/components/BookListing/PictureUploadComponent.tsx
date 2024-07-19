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
import { useFormikContext } from "formik";
import { IBooklistingForm } from "@/app/(base)/new-listing/page";

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
  const { values, setFieldValue } = useFormikContext<IBooklistingForm>();

  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png, image/jpeg";
    input.click();
    input.addEventListener("change", (e: any) => {
      const file = e.target.files[0];

      setFieldValue("coverImg", URL.createObjectURL(file));
    });
  };
  const handleDeleteImage = () => {
    setFieldValue("coverImg", null);
  };
  return (
    <Stack spacing={"0.25rem"} style={{ color: "#FAF9F6" }}>
      <Text fontSize="14px" fontWeight={500}>
        {label}
      </Text>
      {values?.coverImg ? (
        <Flex gap={"16px"} alignItems={"center"}>
          <Box
            width={"10.5625rem"}
            height={"10.5625rem"}
            rounded={"0.5rem"}
            bg={"shade.black"}
          >
            <Img
              src={values.coverImg}
              objectFit={"cover"}
              objectPosition={"center"}
              height={"100%"}
              width={"100%"}
              rounded={"0.5rem"}
              bg={"shade.black"}
            />
          </Box>

          <Stack gap={"12px"} flex={1}>
            <Button
              onClick={handleSelectImage}
              variant={"rounded"}
              fontSize={"0.875rem"}
              py={"0.75rem"}
            >
              Change Picture
            </Button>
            <Button
              onClick={handleDeleteImage}
              color={"error.200"}
              variant={"outlined"}
              fontSize={"0.875rem"}
              py={"0.75rem"}
            >
              Delete picture
            </Button>
          </Stack>
        </Flex>
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
            <Flex gap="8px" alignItems={"center"} justifyContent={"center"}>
              <Button
                height="36px"
                borderRadius="32px"
                fontSize={"0.875rem"}
                onClick={handleSelectImage}
              >
                <Flex gap="8px">
                  <PictureAddIcon height="16px" /> <Text> Upload Picture</Text>
                </Flex>
              </Button>

              <Text color={"grey.400"} fontSize={"0.75rem"}>
                OR
              </Text>

              <Button
                height="36px"
                variant="outlined"
                fontSize={"0.875rem"}
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
        <Box fontSize="14px" color="grey.desc" lineHeight="1.45">
          {description}
        </Box>
      )}{" "}
    </Stack>
  );
};

export default PictureUpload;
