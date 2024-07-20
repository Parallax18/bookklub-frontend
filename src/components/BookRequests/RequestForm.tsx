import React from "react";
import { IBook } from "../home/BookItemCard";
import { Box, Flex, Stack, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import ReusableInput from "../general/Input";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";

interface RequestFormProps extends IBook {}

const RequestForm = (props: RequestFormProps) => {
  const formik = useFormik({
    initialValues: {
      rent_duration: "",
    },
    onSubmit: (values) => console.log({ values }),
    validationSchema: Yup.object().shape({
      rent_duration: Yup.string().required("Book title is required"),
    }),
  });
  return (
    <Stack>
      <Flex bg={"grey.700"} padding={"1rem"} rounded={"0.5rem"} gap={"0.75rem"}>
        <Box position={"relative"} w={"3rem"} h={"3rem"} rounded={"full"}>
          <Image
            fill
            src={props.coverImg}
            alt=""
            style={{ borderRadius: "100%" }}
          />
        </Box>
        <Stack spacing={"0.25rem"}>
          <Text
            color={"shade.white"}
            fontSize={"1rem"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"145%"}
          >
            {props.title}
          </Text>
          <Text
            color={"grey.400"}
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            by {props.author}
          </Text>
          <Text
            color={"grey.400"}
            fontSize={"0.75rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"145%"}
          >
            Owned by {props.ownerName}
          </Text>
        </Stack>
      </Flex>
      <FormikProvider value={formik}>
        <chakra.form onSubmit={formik.handleSubmit} id={"request_form"}>
          <ReusableInput
            label="How long do you want to rent this book?"
            value={formik.values.rent_duration}
            placeholder="eg. 30"
            type="number"
            name="rent_duration"
          />
        </chakra.form>
      </FormikProvider>
    </Stack>
  );
};

export default RequestForm;
