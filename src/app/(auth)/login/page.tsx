"use client";
import { HttpClient } from "@/api-services/http";
import ReusableInput from "@/components/Input";
import ReusableButton from "@/components/ReusableButton";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import {
  Formik,
  Field,
  ErrorMessage,
  FormikValues,
  FormikHelpers,
  useFormik,
  Form,
} from "formik";
import * as Yup from "yup";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
interface FormValues {
  email: string;
  password: string;
}
const Login = () => {
  const validationSchema = Yup.object().shape({
    // name: Yup.string().required('Name is required'),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref('password')], 'Passwords must match')
    //   .required('Confirm Password is required'),
  });
  // const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const useHandleLogin = () => {
    return useMutation({
      mutationKey: ["login"],
      mutationFn: async (loginData: FormValues) => {
        // const response = await HttpClient.post({
        //   url: "/login",
        //   data: loginData,
        // });
        router.push("/verify_email");
        // return response;
      },
    });
  };

  const mutation = useHandleLogin();
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    mutation.mutate(values);
    const { setSubmitting } = formikHelpers;
    setSubmitting(true);
    setSubmitting(false);
    // try {
    //   await mutation.mutateAsync(values);
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  };
  // const handleSubmit = (
  //   values: FormValues,
  //   formikHelpers: FormikHelpers<FormValues>
  // ) => {
  //   const { setSubmitting } = formikHelpers;
  //   setSubmitting(true);
  //   console.log(values);
  //   setSubmitting(false);
  // };
  return (
    <>
      <Stack>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "0",
            minHeight: "100vh",
            paddingLeft: "5%",
            paddingRight: "5%",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              position: "relative",
              padding: "4rem 0",
            }}
          >
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Box width={{ base: "100%", sm: "25rem" }}>
                  <Form
                    style={{
                      gap: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      zIndex: 1000,
                    }}
                  >
                    <Heading fontSize="32px">Login to your account</Heading>
                    <Text color="grey.400" fontSize="14px">
                      Fill in details to login 🤩
                    </Text>
                    <Box
                      lineHeight="1.2"
                      display="flex"
                      pb="10px"
                      alignItems="center"
                      justifyContent="center"
                      gap="10px"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      border="1px"
                      p="13px"
                      borderRadius="8px"
                      fontSize="16px"
                      fontWeight="700"
                      borderColor="#475367"
                      bg="#1B1C1E"
                      color="#FFFFFF"
                    >
                      <FcGoogle size={25} />
                      <Text>Continue with Google</Text>
                    </Box>
                    <Box
                      lineHeight="1.2"
                      display="flex"
                      pb="10px"
                      alignItems="center"
                      justifyContent="center"
                      gap="10px"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      border="1px"
                      p="13px"
                      borderRadius="8px"
                      fontSize="16px"
                      fontWeight="700"
                      borderColor="#475367"
                      bg="#1B1C1E"
                      color="#FFFFFF"
                    >
                      <FaApple size={25} />
                      <Text>Continue with Apple</Text>
                    </Box>
                    <Box
                      textAlign="center"
                      fontSize="14px"
                      color="#98A2B3"
                      py="10px"
                    >
                      <Text>OR</Text>
                    </Box>
                    <ReusableInput
                      label="Email"
                      value={values.email}
                      placeholder="johndoe@abc.com"
                      type="email"
                      name="email"
                      // onChange={handleChange(values.email)}
                    />
                    <Box position="relative">
                      <ReusableInput
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        placeholder="password"
                        name="password"
                        // onChange={handleChange(values.password)}
                      />
                      <div
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {showPassword ? (
                          <VscEyeClosed
                            size={20}
                            style={{
                              position: "absolute",
                              color: "#98A2B3",
                              top: "42",
                              right: "20",
                            }}
                          />
                        ) : (
                          <VscEye
                            size={20}
                            style={{
                              position: "absolute",
                              color: "#98A2B3",
                              top: "42",
                              right: "20",
                            }}
                          />
                        )}
                      </div>
                    </Box>
                    <Box display="flex" justifyContent="end">
                      <Text color="#FAF9F6" fontSize="14px" cursor="pointer">
                        Forgot password?
                      </Text>
                    </Box>

                    <Button>Login</Button>
                    <Box
                      color="#98A2B3"
                      display="flex"
                      justifyContent="center"
                      py="10px"
                      gap="5px"
                    >
                      Don’t have an account?
                      <Text fontWeight="700" color="#ffffff">
                        <Link href="/register"> Create one here</Link>
                      </Text>
                    </Box>
                  </Form>
                </Box>
              )}
            </Formik>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Login;
