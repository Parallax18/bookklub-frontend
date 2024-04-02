import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import ReusableInput from "../general/Input";
import * as yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import CustomSelect from "../general/CustomSelect";
import {
  useGetAllCountries,
  useGetAllStates,
} from "@/api-services/country-list";
import CheckedIcon from "../icons/CheckedIcon";
import { useRegister } from "@/api-services/auth";

const avatars = [
  "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lighting.jpeg?alt=media&token=43c434cf-19a3-404d-bf02-41453b4fbc1b",
  "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/lady.jpeg?alt=media&token=25156b8e-f42d-4409-9a7e-2ea984bd5aa8",
  "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/earrings.jpeg?alt=media&token=dbc6a50e-8330-4d55-88ba-b1298db27b74",
  "https://firebasestorage.googleapis.com/v0/b/bookklub-v0.appspot.com/o/flashy.jpeg?alt=media&token=5ee8efcc-ef77-4c06-b19d-10d7c2499bd5",
];

const ProfileSetup = ({
  token,
  email,
  password,
}: {
  token: string;
  email: string;
  password: string;
}) => {
  const { data: countries } = useGetAllCountries();
  const { data: states } = useGetAllStates();
  const { mutate: register, isPending } = useRegister();
  const formik = useFormik({
    initialValues: {
      username: "",
      mobile: "",
      address: "",
      country: "Nigeria",
      state: "Niger",
      avatar: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Enter your username"),
      mobile: yup.string().required("Enter your mobile number"),
      address: yup.string().required("Enter an address"),
      country: yup.string().notRequired(),
      state: yup.string().notRequired(),
      avatar: yup.string().required("Select an avatar"),
    }),
    onSubmit: (val) => {
      register({ ...val, email, password, token });
    },
  });
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          height: "90vh",
        }}
      >
        <Stack flex={1}>
          <Heading fontSize="32px" color={"shade.white"}>
            Profile setup
          </Heading>
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
          <Stack spacing={"0.25rem"} color={"shade.white"}>
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
              Country
            </Text>
            <CustomSelect
              onSelect={(value: string) =>
                formik.setFieldValue("country", value)
              }
              label="Select a country"
              placeholder="Select your country"
              data={countries?.map((item) => ({
                id: item.name,
                title: item.name,
                flag: item.flag,
              }))}
            />
          </Stack>
          <Stack spacing={"0.25rem"}>
            <Text fontSize="14px" fontWeight={500} color={"shade.white"}>
              State
            </Text>
            <CustomSelect
              onSelect={(value: string) => formik.setFieldValue("state", value)}
              label="Select a state"
              placeholder="Select your state"
              data={states
                ?.filter(
                  (i) =>
                    i.name.toLowerCase() === formik.values.country.toLowerCase()
                )
                .flatMap((item) =>
                  item.states.map((state) => ({
                    id: state.name,
                    title: state.name,
                  }))
                )}
            />
          </Stack>
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
                  onClick={() => formik.setFieldValue("avatar", avatar)}
                >
                  {formik.values.avatar === avatar && (
                    <CheckedIcon
                      position={"absolute"}
                      zIndex={1}
                      right={0}
                      boxSize="1rem"
                      m={"0.25rem"}
                    />
                  )}
                  <Image
                    fill
                    alt={""}
                    loading="eager"
                    src={avatar}
                    style={{
                      zIndex: 0,
                      borderRadius: "0.25rem",
                      objectFit: "cover",
                      background: "#1B1C1E",
                    }}
                  />
                </Box>
              ))}
            </HStack>
          </Stack>
        </Stack>
        {/* <Button isDisabled={!formik.isValid}>Complete Setup</Button> */}
        <Button type="submit" isLoading={isPending}>
          Complete Setup
        </Button>
      </form>
    </FormikProvider>
  );
};

export default ProfileSetup;
