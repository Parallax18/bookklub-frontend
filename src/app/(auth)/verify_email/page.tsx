"use client";
import ReusableButton from "@/components/ReusableButton";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeInput, setActiveInput] = useState(0);
  const inputsRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...otp];
    const { value } = e.target;
    newOtp[index] = value.substring(value.length - 1);
    if (!value) {
      setActiveInput(index - 1);
    } else {
      setActiveInput(index + 1);
    }
    setOtp(newOtp);
  };
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "e") {
      e.preventDefault();
    }
  };
  useEffect(() => {
    inputsRef.current?.focus();
  }, [activeInput]);
  return (
    <>
      <Stack>
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          color={"shade.white"}
          height={"95vh"}
        >
          <form
            // onSubmit={handleSubmit}
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
              <Heading fontSize="32px">Email verification</Heading>
              <Text color="grey.400" fontSize="14px">
                A 6-digit code has been sent to your email johndoe@abc.com.
                Enter the code to verify email.
              </Text>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {otp.map((value, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Input
                      backgroundColor="shade.black"
                      border="1px solid grey.600"
                      borderColor={"grey.600"}
                      borderRadius="6px"
                      fontSize="17px"
                      display="flex"
                      fontWeight="700"
                      height="50px"
                      maxWidth="50px"
                      focusBorderColor="transparent"
                      _focus={{
                        border: "1px solid primary.200",
                      }}
                      type="number"
                      value={otp[index]}
                      ref={index === activeInput ? inputsRef : null}
                      pattern="[0-9]*"
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleOnKeyDown(e)}
                    />
                    {index === 2 && <div className="md:w-[30px]" />}
                  </div>
                ))}
              </div>
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
            <Button type="submit">Verify and continue</Button>
          </form>
        </Flex>
      </Stack>
    </>
  );
};

export default VerifyEmail;
