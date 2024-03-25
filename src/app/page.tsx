"use client";

import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();

  return <Button onClick={() => router.push("/register")}>Go to Signup</Button>;
}
