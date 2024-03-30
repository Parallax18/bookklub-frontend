"use client";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

import CreateAccount from "@/components/Auth/CreateAccount";
import VerifyEmail from "@/components/Auth/VerifyEmail";

import ProfileSetup from "@/components/Auth/ProfileSetup";

enum REGISTRATION_STEPS {
  CREATE_ACCOUNT,
  VERIFY_EMAIL,
  PROFILE_SETUP,
}

const Register = () => {
  const [step, setStep] = useState(REGISTRATION_STEPS.CREATE_ACCOUNT);
  return (
    <>
      <Stack>
        <Flex>
          <Text color={"shade.white"}>{step + 1}</Text>
          <Text color={"grey.400"}>
            /{Object.keys(REGISTRATION_STEPS).length / 2}
          </Text>
        </Flex>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          {step === REGISTRATION_STEPS.CREATE_ACCOUNT && (
            <CreateAccount
              onNext={() => setStep(REGISTRATION_STEPS.VERIFY_EMAIL)}
            />
          )}
          {step === REGISTRATION_STEPS.VERIFY_EMAIL && (
            <VerifyEmail
              onNext={() => setStep(REGISTRATION_STEPS.PROFILE_SETUP)}
            />
          )}
          {step === REGISTRATION_STEPS.PROFILE_SETUP && <ProfileSetup />}
        </div>
      </Stack>
    </>
  );
};

export default Register;
