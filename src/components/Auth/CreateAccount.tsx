import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { FormikProvider, useFormik } from "formik";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ReusableInput from "../general/Input";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Link from "next/link";
import * as Yup from "yup";
import { useRequestOtp } from "@/api-services/auth";

const CreateAccount = ({
  onNext,
}: {
  onNext: (arg: Record<string, string>) => void;
}) => {
  const { mutate: requestOtp, isPending } = useRequestOtp();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (val) => {
      requestOtp(val, {
        onSuccess: (res) => onNext({ token: res.token, ...val }),
      });
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormikProvider value={formik}>
      <Box>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack spacing={"0.5rem"}>
            <Heading fontSize="32px" color={"shade.white"}>
              Create an account
            </Heading>
            <Text color="grey.400" fontSize="14px">
              Let’s get you started with bookklub! 🤩
            </Text>
          </Stack>
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
            borderColor="grey.600"
            bg="shade.black"
            color="#FFFFFF"
          >
            <FcGoogle size={25} />
            <Text>Sign up with Google</Text>
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
            borderColor="grey.600"
            bg="shade.black"
            color="#FFFFFF"
          >
            <FaApple size={25} />
            <Text>Sign up with Apple</Text>
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
            name="email"
          />
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
          <Button
            type="submit"
            isLoading={isPending}
            isDisabled={!formik.isValid || isPending}
          >
            Create account
          </Button>
          <Box
            color="grey.400"
            display="flex"
            justifyContent="center"
            py="10px"
            gap="5px"
          >
            Already have an account?
            <Text fontWeight="700" color="#ffffff">
              <Link href="/login"> Login here</Link>
            </Text>
          </Box>
        </form>
      </Box>
    </FormikProvider>
  );
};

export default CreateAccount;
