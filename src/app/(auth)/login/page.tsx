"use client";

import ReusableInput from "@/components/general/Input";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useLogin } from "@/api-services/auth";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      login(values, {
        onSuccess: () => {
          router.push("/");
        },
      });
    },
  });

  return (
    <>
      <Stack>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <FormikProvider value={formik}>
              <Box>
                <Form
                  style={{
                    gap: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 1000,
                  }}
                >
                  <Heading fontSize="32px" color="shade.white">
                    Login to your account
                  </Heading>
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
                    borderColor="grey.400"
                    bg="shade.black"
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
                    borderColor="grey.400"
                    bg="shade.black"
                    color="#FFFFFF"
                  >
                    <FaApple size={25} />
                    <Text>Continue with Apple</Text>
                  </Box>
                  <Box textAlign="center">
                    <Text
                      color={"grey.400"}
                      fontWeight={400}
                      lineHeight={"145%"}
                      fontStyle={"normal"}
                      fontSize={"0.875rem"}
                    >
                      OR
                    </Text>
                  </Box>
                  <ReusableInput
                    label="Email"
                    value={formik.values.email}
                    placeholder="johndoe@abc.com"
                    type="email"
                    name="email"
                    // onChange={handleChange(values.email)}
                  />
                  <Box position="relative">
                    <ReusableInput
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      value={formik.values.password}
                      placeholder="password"
                      name="password"
                      // onChange={handleChange(values.password)}
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
                  <Box display="flex" justifyContent="end">
                    <Text
                      color="shade.white"
                      fontSize="14px"
                      cursor="pointer"
                      onClick={() => router.push("/forgotpassword")}
                    >
                      Forgot password?
                    </Text>
                  </Box>

                  <Button isLoading={isPending} type="submit">
                    Login
                  </Button>
                  <Box
                    color="grey.400"
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
            </FormikProvider>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Login;
