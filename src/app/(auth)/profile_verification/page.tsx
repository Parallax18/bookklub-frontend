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
const ProfileVerification = () => {
  const [form, setForm] = useState({ username: "", address: "" });
  //   const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = HttpClient.post({ url: "/login", data: form }).then((res) => {
      console.log({ res });
      // @ts-ignore
      Cookies.set("bbk", res?.accessToken);
      // @ts-ignore
      Cookies.set("bbkuser", res?.id);
      //   router.push("/chat");
      return res;
    });

    console.log({ data });
  };

  const handleUsernameChange = (value: string) => {
    setForm({ ...form, username: value });
  };
  const handleAddressChange = (value: string) => {
    setForm({ ...form, address: value });
  };
  const [value, setValue] = useState<string>("");
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
                width: "25rem",
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
                placeholder="@johnddoe"
                type="text"
                onChange={handleUsernameChange}
              />
              <ReusableInput
                label="Address"
                value={form.address}
                placeholder="e.g. 43 Ferrington street, Lagos"
                type="text"
                onChange={handleAddressChange}
              />
              <PhoneInput
                country="US"
                value={value}
                onChange={(newValue) => setValue}
              />
              {/* <SelectInput name="countries" label="Country" placeholder="Enter your country" /> */}
              <ReusableButton Type="Complete setup" />
            </form>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default ProfileVerification;
