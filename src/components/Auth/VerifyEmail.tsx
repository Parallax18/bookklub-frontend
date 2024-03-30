import React, { Dispatch, SetStateAction } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  PinInput,
  PinInputField,
  HStack,
} from "@chakra-ui/react";
import { ErrorMessage, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const VerifyEmail = ({
  onNext,
}: {
  onNext: Dispatch<SetStateAction<number>>;
}) => {
  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: Yup.object().shape({
      otp: Yup.string()
        .required("OTP is required")
        .min(6, "Must be 6 characters"),
    }),
    onSubmit: () => {
      //   @ts-expect-error --
      onNext();
    },
  });
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      color={"shade.white"}
      height={"90vh"}
    >
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            gap: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            width: "full",
            flexGrow: "1",
          }}
        >
          <Box display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Heading fontSize="32px">Email verification</Heading>
            <Text color="grey.400" fontSize="14px">
              A 6-digit code has been sent to your email johndoe@abc.com. Enter
              the code to verify email.
            </Text>
            <Stack spacing={0}>
              <HStack>
                <PinInput
                  otp
                  onChange={(value) => formik.setFieldValue("otp", value)}
                >
                  <PinInputField
                    border={"1px solid grey.600"}
                    borderColor={"grey.600"}
                    bg={"shade.black"}
                    width={"full"}
                    height={"3.875rem"}
                  />
                  <PinInputField
                    border={"1px solid grey.600"}
                    borderColor={"grey.600"}
                    bg={"shade.black"}
                    width={"full"}
                    height={"3.875rem"}
                  />
                  <PinInputField
                    border={"1px solid grey.600"}
                    borderColor={"grey.600"}
                    bg={"shade.black"}
                    width={"full"}
                    height={"3.875rem"}
                  />
                  <PinInputField
                    border={"1px solid grey.600"}
                    borderColor={"grey.600"}
                    bg={"shade.black"}
                    width={"full"}
                    height={"3.875rem"}
                  />
                  <PinInputField
                    border={"1px solid grey.600"}
                    borderColor={"grey.600"}
                    bg={"shade.black"}
                    width={"full"}
                    height={"3.875rem"}
                  />
                  <PinInputField
                    border={"1px solid grey.600"}
                    borderColor={"grey.600"}
                    bg={"shade.black"}
                    width={"full"}
                    height={"3.875rem"}
                  />
                </PinInput>
              </HStack>
              <ErrorMessage
                component={Text}
                render={(err) => (
                  <Text color={"error.200"} fontSize={"xs"}>
                    {err}
                  </Text>
                )}
                name={"otp"}
              />
            </Stack>
            <Box
              color="grey.400"
              display="flex"
              justifyContent="center"
              py="10px"
              gap="5px"
            >
              Didn’t get code?
              <Text fontWeight="700" color="#ffffff">
                {" "}
                Resend code
              </Text>
            </Box>
            <Text textAlign="center" color="#ffffff" fontWeight="700">
              Open email
            </Text>
          </Box>
          <Button type="submit">Verify and continue</Button>
        </form>
      </FormikProvider>
    </Flex>
  );
};

export default VerifyEmail;
