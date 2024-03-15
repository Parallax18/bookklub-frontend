"use client";

import { FormEvent, useState } from "react";
import { HttpClient } from "@/api-services/http";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Box, Button } from "@chakra-ui/react";

export default function Home() {
  const [form, setForm] = useState({ username: "", password: "" });
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
  return (
    <Box w="100vw" h="100vh">
      Is this what they mean by foot patrol?
    </Box>
  );
}
