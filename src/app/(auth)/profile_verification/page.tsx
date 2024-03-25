"use client";
import { HttpClient } from "@/api-services/http";
import ReusableInput from "@/components/Input";
import ReusableButton from "@/components/ReusableButton";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import SelectInput from "@/components/ReusableSelect";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

interface FormValues {
  username: string;
  address: string;
}

const ProfileVerification = () => {
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
  const [value, setValue] = useState();
  const router = useRouter();

  const useHandleLogin = () => {
    // return useMutation({
    //   mutationKey: ["login"],
    //   mutationFn: async (loginData: FormValues) => {
    //     const response = await HttpClient.post({
    //       url: "/register",
    //       data: loginData,
    //     });
    router.push("/verify_email");
    // return response;
    // },
    // onSuccess: (data) => {
    //   console.log({ data });
    //   router.push("/chat");
    // },
    // onError: (error) => {
    //   console.log({ error });
    // },
    // });
  };

  // const mutation = useHandleLogin();
  // const handleSubmit = (
  //   values: FormValues,
  //   formikHelpers: FormikHelpers<FormValues>
  // ) => {
  //   mutation.mutate(values);
  //   const { setSubmitting } = formikHelpers;
  //   setSubmitting(true);
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
              initialValues={{ username: "", address: "" }}
              validationSchema={validationSchema}
              // onSubmit={handleSubmit}
              onSubmit={useHandleLogin}
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
                    <Heading fontSize="32px">Profile setup</Heading>
                    <Text color="#98A2B3" fontSize="14px">
                      Let’s get you properly setup. This would be quick.
                    </Text>
                    <ReusableInput
                      label="Username"
                      value={values.username}
                      placeholder="@johnddoe"
                      type="username"
                      name="username"
                      // onChange={handleChange(values.email)}
                    />
                    <PhoneInput
                      defaultCountry="NG"
                      value={value}
                      onChange={(newValue) => setValue}
                    />
                    <ReusableInput
                      label="Address"
                      // type={showPassword ? "text" : "password"}
                      type="text"
                      value={values.address}
                      placeholder="e.g. 43 Ferrington street, Lagos"
                      name="address"
                      // onChange={handleChange(values.password)}
                    />
                    <ReusableButton Type="Complete setup" />
                  </Form>
                </Box>
              )}
            </Formik>
          </div>
        </div>
      </Stack>
      {/* <Stack>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "0",
            minHeight: "100vh",
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
            <form
              onSubmit={handleSubmit}
              style={{
                gap: "1rem",
                display: "flex",
                flexDirection: "column",
                maxWidth: "25rem",
                zIndex: 1000,
              }}
            >
              <Heading fontSize="32px">Profile setup</Heading>
              <Text color="#98A2B3" fontSize="14px">
                Let’s get you properly setup. This would be quick.
              </Text>
              <ReusableInput
                label="Username"
                value={form.username}
                placeholder="johndoe"
                type="text"
                name="username"
              />
              {/* <ReusableInput
                label="Username"
                value={form.username}
                placeholder="@johnddoe"
                type="text"
                name="username"
              />
              <ReusableInput
                label="Address"
                value={form.address}
                placeholder="e.g. 43 Ferrington street, Lagos"
                type="text"
                name="address"
              />
              <PhoneInput
                country="US"
                value={value}
                onChange={(newValue) => setValue}
              /> */}
      {/* <SelectInput name="countries" label="Country" placeholder="Enter your country" /> */}
      {/* </form> */}
      {/* // </div> */}
      {/* // </div> */}
      {/* // </Stack> */}
    </>
  );
};

export default ProfileVerification;
