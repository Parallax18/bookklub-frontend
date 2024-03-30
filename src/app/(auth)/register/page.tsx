"use client";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

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
    data?: unknown;
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
            onNext={(token) =>
              setStep({
                view: REGISTRATION_STEPS.VERIFY_EMAIL,
                data: { token },
              })
            }
          />
        )}
        {step.view === REGISTRATION_STEPS.VERIFY_EMAIL && (
          <VerifyEmail
            data={step.data as { token: string }}
            onNext={() => setStep({ view: REGISTRATION_STEPS.PROFILE_SETUP })}
          />
        )}
        {step.view === REGISTRATION_STEPS.PROFILE_SETUP && <ProfileSetup />}
      </Stack>
    </>
  );
};

export default Register;
