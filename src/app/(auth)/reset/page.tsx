"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useForgotPassword, useResetPassword } from "@/api-services/auth";
import ReusableInput from "@/components/general/Input";
import { ForgotPassword } from "@/api-services/auth/types";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
const Reset = () => {
  const { mutate: resetPassword, isPending } = useResetPassword();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: { password: "" },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (val) => {
      const { password } = val;
      //   resetPassword(password);
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
              Reset password
            </Heading>
            <Text color="grey.400" fontSize="14px">
              Let’s get you back on track. Create a new password here. Just
              ensure you meet with the requirements.
            </Text>
            <Box position="relative">
              <ReusableInput
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                placeholder="password"
                name="password"
              />
              <div
                onClick={() => setShowPassword((prevState) => !prevState)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? (
                  <VscEyeClosed
                    size={20}
                    style={{
                      position: "absolute",
                      color: "grey.400",
                      top: "42",
                      right: "20",
                    }}
                  />
                ) : (
                  <VscEye
                    size={20}
                    style={{
                      position: "absolute",
                      color: "grey.400",
                      top: "42",
                      right: "20",
                    }}
                  />
                )}
              </div>
            </Box>
            <Text color="grey.400" fontSize="14px">
              You can always tap the eye icon at the right to reveal your
              password to be sure you entered accurately.
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

export default Reset;
