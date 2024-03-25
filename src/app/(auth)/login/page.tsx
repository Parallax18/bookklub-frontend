"use client";
import { HttpClient } from "@/api-services/http";
import ReusableInput from "@/components/Input";
import ReusableButton from "@/components/ReusableButton";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = HttpClient.post({ url: "/login", data: form }).then((res) => {
      console.log({ res });
      // @ts-ignore
      Cookies.set("bbk", res?.accessToken);
      // @ts-ignore
      Cookies.set("bbkuser", res?.id);
      router.push("/chat");
      return res;
    });

    console.log({ data });
  };

  const handleEmailChange = (value: string) => {
    setForm({ ...form, email: value });
  };
  const handlePasswordChange = (value: string) => {
    setForm({ ...form, password: value });
  };
  // const showPassword
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
              <Heading fontSize="32px">Login to your account</Heading>
              <Text color="#98A2B3" fontSize="14px">
                Fill in details to login 🤩
              </Text>
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
                borderColor="#475367"
                bg="#1B1C1E"
                color="#FFFFFF"
              >
                <FcGoogle size={25} />
                <Text>Continue with Google</Text>
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
                borderColor="#475367"
                bg="#1B1C1E"
                color="#FFFFFF"
              >
                <FaApple size={25} />
                <Text>Continue with Apple</Text>
              </Box>
              <Box textAlign="center" fontSize="14px" color="#98A2B3" py="10px">
                <Text>OR</Text>
              </Box>
              <ReusableInput
                label="Email"
                value={form.email}
                placeholder="johndoe@abc.com"
                type="email"
                onChange={handleEmailChange}
              />
              <Box position="relative">
                <ReusableInput
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  placeholder="password"
                  onChange={handlePasswordChange}
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
                        color: "#98A2B3",
                        top: "42",
                        right: "20",
                      }}
                    />
                  ) : (
                    <VscEye
                      size={20}
                      style={{
                        position: "absolute",
                        color: "#98A2B3",
                        top: "42",
                        right: "20",
                      }}
                    />
                  )}
                </div>
              </Box>
              <Box display="flex" justifyContent="end">
                <Text color="#FAF9F6" fontSize="14px" cursor="pointer">
                  Forgot password?
                </Text>
              </Box>

              <Button>Login</Button>
              <Box
                color="#98A2B3"
                display="flex"
                justifyContent="center"
                py="10px"
                gap="5px"
              >
                Don’t have an account?
                <Text
                  cursor={"pointer"}
                  onClick={() => router.push("/register")}
                  fontWeight="700"
                  color="shade.white"
                >
                  Create one here
                </Text>
              </Box>
            </form>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Login;
