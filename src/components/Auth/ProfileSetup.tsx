import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import ReusableInput from "../general/Input";
import * as yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";

const avatars = [
  "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lighting.jpeg?alt=media&token=43c434cf-19a3-404d-bf02-41453b4fbc1b",
  "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lady.jpeg?alt=media&token=25156b8e-f42d-4409-9a7e-2ea984bd5aa8",
  "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/earrings.jpeg?alt=media&token=dbc6a50e-8330-4d55-88ba-b1298db27b74",
  "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/flashy.jpeg?alt=media&token=5ee8efcc-ef77-4c06-b19d-10d7c2499bd5",
];

const ProfileSetup = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      mobile: "",
      address: "",
      country: "",
      state: "",
      avatar: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Enter your username"),
      mobile: yup.string().required("Enter your mobile number"),
      address: yup.string().required("Enter an address"),
      country: yup.string().required("Select a country"),
      state: yup.string().required("Select a state"),
      avatar: yup.string().required("Select an avatar"),
    }),
    onSubmit: (val) => {
      console.log({ val });
    },
  });
  return (
    <FormikProvider value={formik}>
      <Box width={{ base: "100%", sm: "25rem" }}>
        <form
          style={{
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
        >
          <Heading fontSize="32px">Profile setup</Heading>
          <Text color="grey.400" fontSize="14px">
            Let’s get you properly setup. This would be quick.
          </Text>
          <ReusableInput
            label="Username"
            value={formik.values.username}
            placeholder="@johnddoe"
            type="username"
            name="username"
          />
          <Stack spacing={"0.25rem"}>
            <Text fontSize="14px" fontWeight={500} color={"shade.white"}>
              Phone number
            </Text>
            <PhoneInput
              inputClass="phone_input"
              containerClass="phone_container_class"
              buttonClass="phone_country_button"
              searchClass="phone_search_class"
              dropdownClass="phone_country_dropdown"
              onChange={(formattedValue) => {
                formik?.setFieldValue(`mobile`, formattedValue);
              }}
              enableSearch
              countryCodeEditable={false}
              country={"ng"}
            />
          </Stack>

          <ReusableInput
            label="Address"
            type="text"
            value={formik.values.address}
            placeholder="e.g. 43 Ferrington street, Lagos"
            name="address"
          />
          <Stack spacing={"0.25rem"}>
            <Text fontSize="14px" fontWeight={500} color={"shade.white"}>
              Choose an Avatar
            </Text>

            <HStack spacing={"0.75rem"}>
              {avatars.map((avatar) => (
                <Box
                  key={avatar}
                  rounded={"0.25rem"}
                  width={"5.625rem"}
                  height={"5.625rem"}
                  position={"relative"}
                >
                  <Image
                    fill
                    alt={""}
                    loading="eager"
                    objectFit="cover"
                    src={avatar}
                    style={{ borderRadius: "0.25rem" }}
                  />
                </Box>
              ))}
            </HStack>
          </Stack>
          <Button>Complete Setup</Button>
        </form>
      </Box>
    </FormikProvider>
  );
};

export default ProfileSetup;
