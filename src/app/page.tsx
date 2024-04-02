"use client";

import { useRouter } from "next/navigation";
import { Button, Center, VStack } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();

  return (
    <VStack my="20%">
      <Button onClick={() => router.push("/register")}>Go to Signup</Button>
      <Button isLoading={true} onClick={() => router.push("/register")}>
        This is an example
      </Button>
    </VStack>
  );
}
