import React, { Dispatch, SetStateAction, useEffect } from "react";
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
import { useConfirmOtp } from "@/api-services/auth";

const VerifyEmail = ({
  onNext,
  data,
}: {
  onNext?: Dispatch<SetStateAction<number>>;
  data: { token: string; email: string };
}) => {
  const { mutate: confirmOtp, isPending } = useConfirmOtp();

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: Yup.object().shape({
      otp: Yup.string()
        .required("OTP is required")
        .min(6, "Must be 6 characters"),
    }),
    onSubmit: (val) => {
      confirmOtp(
        { otp: val.otp, token: data.token },
        {
          onSuccess: () => {
            //   @ts-expect-error --
            onNext();
          },
        }
      );
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
            <Heading fontSize="32px" color={"shade.white"}>
              Email verification
            </Heading>
            <Text color="grey.400" fontSize="14px">
              A 6-digit code has been sent to your email {data.email}. Enter the
              code to verify email.
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
          <Button
            isDisabled={!formik.isValid || isPending}
            isLoading={isPending}
            type="submit"
          >
            Verify and continue
          </Button>
        </form>
      </FormikProvider>
    </Flex>
  );
};

export default VerifyEmail;
