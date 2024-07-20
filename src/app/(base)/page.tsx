"use client";

import {
  Badge,
  Box,
  Flex,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import BookItemCard from "@/components/home/BookItemCard";
import MapMarker from "@/components/icons/MapMarker";
import SearchInput from "@/components/general/SearchInput";
import FullScreenModal from "@/components/general/FullScreenModal";

import BookSearch, { bookSearchFilters } from "@/components/home/BookSearch";
import PillBar from "@/components/general/PillBar";

export default function Home() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack color={"grey.400"} border={"1px solld red"}>
        <Stack>
          <Text
            color={"shade.white"}
            fontSize={"1.25rem"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"145%"}
          >
            Hi, Jamil!
          </Text>
          <Flex color={"grey.400"} alignItems={"center"}>
            <MapMarker boxSize={"1rem"} />
            <Text
              fontSize={"0.75rem"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"145%"}
            >
              Lagos, Nigeria
            </Text>
          </Flex>
        </Stack>
        <Box onClick={onOpen}>
          <SearchInput />
        </Box>
      </Stack>
      <VStack my="1rem" mb={"5rem"} spacing={"1rem"}>
        {[1, 2, 3, 4].map((i) => (
          <BookItemCard
            key={i}
            title="Think and grow rich"
            author="Napoleon Hill"
            rating="4.2"
            country="Nigeria"
            state="Lagos"
            coverImg="https://s3-alpha-sig.figma.com/img/8f98/1940/6405ce57e1785d73ad6a33ebf1acf6f3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AyGoCdrpT1DrRrP4cU4b6ZKwuy1SEDtwfvx5p8QfGtrUA24JMG-7qObvFA51oCL3SP7QeADAu4TH7l~XX9iai1bIDTeG81AeklWifucyXxfc4I1Yh1g4bXvL5c5FBg1pmrYIQaesHR8OqZ2K484cWx-qSpoRgPm~5dfJ~YB~Ls6vhwmPeY9SEILxKkMk0PMVunsu-YudF--1rfjQZ~Rb4Hl4t0ChF~Ff33XYOJQrELGfBfnSMwG~B-IBkytDaHLumr5eI~yr9YNH~MCMsKUytHzPKEwYNVH9AAuiD6nbwnKLA0PDq0iFiLxQ1gJYK7~XoCCMvuIwQsYS3bzvu7roTA__"
          />
        ))}
      </VStack>
      <FullScreenModal
        isOpen={isOpen}
        onClose={onClose}
        header={
          <Stack spacing={"1rem"}>
            <SearchInput />
            <Flex gap={"0.75rem"} overflowX={"scroll"}>
              {bookSearchFilters.map(({ Icon, title }) => (
                <Badge
                  key={title}
                  bg={"shade.black"}
                  border={"1px"}
                  borderColor={"grey.600"}
                  p={"0.5rem 0.75rem"}
                  rounded={"2rem"}
                  color={"grey.400"}
                  display={"flex"}
                  gap={"0.5rem"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"max-content"}
                  textTransform={"capitalize"}
                >
                  <Icon boxSize={"1rem"} />
                  <Text
                    color={"shade.white"}
                    fontSize={"0.875rem"}
                    fontStyle={"normal"}
                    fontWeight={400}
                    lineHeight={"145%"}
                  >
                    {title}
                  </Text>
                </Badge>
              ))}
            </Flex>
          </Stack>
        }
      >
        <BookSearch />
      </FullScreenModal>
    </>
  );
}
