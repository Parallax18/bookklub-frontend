"use client";
import ReusableButton from "@/components/ReusableButton";
import { Box, Heading, Input, Stack, Text } from "@chakra-ui/react";
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "100px",
            minHeight: "100vh",
            color: "white",
          }}
        >
          <form
            // onSubmit={handleSubmit}
            style={{
              gap: "1rem",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              maxWidth: "400px",
              flexGrow: "1",
            }}
          >
            <Box
              style={{
                gap: "1rem",
                display: "flex",
                flexDirection: "column",
                zIndex: 1000,
              }}
            >
              <Heading fontSize="32px">Email verification</Heading>
              <Text color="#98A2B3" fontSize="14px">
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
                      backgroundColor="#1B1C1E"
                      border="1px solid #475367"
                      borderRadius="6px"
                      fontSize="17px"
                      display="flex"
                      fontWeight="700"
                      height="50px"
                      maxWidth="50px"
                      focusBorderColor="transparent"
                      _focus={{
                        border: "1px solid #90BCA7",
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
                color="#98A2B3"
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
            <Box
              as="button"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="1px"
              borderColor="transparent"
              p="16px"
              borderRadius="8px"
              fontSize="16px"
              fontWeight="semibold"
              bg={
                otp.some((value) => value === "") || otp.length !== 6
                  ? "#ACCDBD"
                  : "#599B7B"
              }
              color="#FFFFFF"
              disabled={otp.some((value) => value === "") || otp.length !== 6}
            >
              Verify and continue
            </Box>
          </form>
        </div>
      </Stack>
    </>
  );
};

export default VerifyEmail;
