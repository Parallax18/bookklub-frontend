"use client";
import { Flex, Stack, Text } from "@chakra-ui/react";

import React, { useState } from "react";

import CreateAccount from "@/components/Auth/CreateAccount";
import VerifyEmail from "@/components/Auth/VerifyEmail";

import ProfileSetup from "@/components/Auth/ProfileSetup";

enum REGISTRATION_STEPS {
  CREATE_ACCOUNT,
  VERIFY_EMAIL,
  PROFILE_SETUP,
}

const Register = () => {
  const [step, setStep] = useState<{
    view: REGISTRATION_STEPS;
    data?: { token: string; email: string; password: string };
  }>({ view: REGISTRATION_STEPS.CREATE_ACCOUNT });
  return (
    <>
      <Stack h={"full"}>
        <Flex>
          <Text color={"shade.white"}>{step.view + 1}</Text>
          <Text color={"grey.400"}>
            /{Object.keys(REGISTRATION_STEPS).length / 2}
          </Text>
        </Flex>

        {step.view === REGISTRATION_STEPS.CREATE_ACCOUNT && (
          <CreateAccount
            onNext={({ token, email, password }) =>
              setStep({
                view: REGISTRATION_STEPS.VERIFY_EMAIL,
                data: { token, email, password },
              })
            }
          />
        )}
        {step.view === REGISTRATION_STEPS.VERIFY_EMAIL && (
          <VerifyEmail
            data={step.data as { token: string; email: string }}
            onNext={() =>
              setStep({ ...step, view: REGISTRATION_STEPS.PROFILE_SETUP })
            }
          />
        )}
        {step.view === REGISTRATION_STEPS.PROFILE_SETUP && (
          <ProfileSetup {...step.data!} />
        )}
      </Stack>
    </>
  );
};

export default Register;
