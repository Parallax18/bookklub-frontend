import React from "react";
import HomeIcon from "../icons/HomeIcon";
import BookIcon from "../icons/BookIcon";
import CrossIcon from "../icons/CrossIcon";
import BellIcon from "../icons/BellIcon";
import ChatIcon from "../icons/ChatIcon";
import {
  Box,
  Center,
  IconProps,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";

interface INavItem {
  route: string;
  Icon: (props: IconProps) => React.JSX.Element;
  title: string;
}

const Routes = [
  {
    route: "/",
    Icon: (props: IconProps) => HomeIcon(props),
    title: "Home",
  },
  {
    route: "/rentals",
    Icon: (props: IconProps) => BookIcon(props),
    title: "Rentals",
  },
  {
    route: "/new-listing",
    Icon: (props: IconProps) => CrossIcon(props),
    title: "List a book",
  },
  {
    route: "/notifications",
    Icon: (props: IconProps) => BellIcon(props),
    title: "Notifications",
  },
  {
    route: "/messages",
    Icon: (props: IconProps) => ChatIcon(props),
    title: "Messsages",
  },
];

const NavItem = ({ Icon, title, route }: INavItem) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Stack
      color={pathname === route ? "primary.400" : "grey.400"}
      onClick={() => router.push(route)}
      alignItems={"center"}
      width={"4.25rem"}
      py={"0.5rem"}
      gap={"0.5rem"}
      position={"relative"}
    >
      {pathname === route && (
        <Box
          bg={"primary.400"}
          rounded={"0.25rem"}
          width={"0.75rem"}
          height={"0.25rem"}
          position={"absolute"}
          top={0}
        />
      )}
      <Icon boxSize={"1.5rem"} mt={"0.5rem"} />
      <Text
        fontSize={"0.75rem"}
        fontStyle={"normal"}
        fontWeight={400}
        lineHeight={"145%"}
        whiteSpace={"nowrap"}
      >
        {title}
      </Text>
    </Stack>
  );
};

const BottomNav = () => {
  return (
    <Center position={"fixed"} bottom={0} w={"full"} left={0}>
      <SimpleGrid
        columns={Routes.length}
        bg={"#1b1c1ee6"}
        backdropBlur={"6px"}
        gap={2}
        alignItems={"center"}
        placeItems={"center"}
        w={"full"}
        maxW={"458px"}
        left={0}
        paddingBottom={"0.5rem"}
      >
        {Routes.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default BottomNav;
