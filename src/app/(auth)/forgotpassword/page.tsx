"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useForgotPassword } from "@/api-services/auth";
import ReusableInput from "@/components/general/Input";
import { ForgotPassword } from "@/api-services/auth/types";
const ForgotPassword = () => {
  const { mutate: forgotPassword, isPending } = useForgotPassword();

  const formik = useFormik<ForgotPassword>({
    initialValues: { email: "" },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (val) => {
      forgotPassword(val);
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
            flexDirection: "column",
            justifyContent: "space-between",
            width: "full",
            flexGrow: "1",
          }}
        >
          <Box display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Heading fontSize="32px" color={"shade.white"}>
              Forgot password
            </Heading>
            <Text color="grey.400" fontSize="14px">
              Oops 😢😢 looks like you forgot your password. Just relax, we
              would help you to recover it. Just provide us with your email.
            </Text>
            <ReusableInput
              label="Email"
              value={formik.values.email}
              type="email"
              placeholder="johndoe@abc.com"
              name="email"
            />
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

export default ForgotPassword;
