import { Box, Circle, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import CheckedIcon from "../icons/CheckedIcon";
import { useFormikContext } from "formik";
import { IBooklistingForm } from "@/app/(base)/new-listing/page";

const WebSearchResults = ({ urls }: { urls: string[] }) => {
  const { values, setFieldValue } = useFormikContext<IBooklistingForm>();
  return (
    <SimpleGrid
      columns={3}
      gap={"0.5rem"}
      maxHeight={"40rem"}
      overflowY={"scroll"}
    >
      {urls.map((url) => (
        <Box
          key={url}
          position={"relative"}
          height={"7.75rem"}
          flex={"1 0 0 "}
          rounded={"0.5rem"}
          onClick={() => setFieldValue("coverImg", url)}
        >
          {values.coverImg === url && (
            <Circle
              rounded={"full"}
              border={"1px solid white"}
              position={"absolute"}
              zIndex={1}
              right={0}
              m={"0.25rem"}
            >
              <CheckedIcon boxSize="1rem" />
            </Circle>
          )}
          <Image
            src={url}
            alt=""
            fill
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
              opacity: values.coverImg === url ? "0.7" : 1,
            }}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default WebSearchResults;
