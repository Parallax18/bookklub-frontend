import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    primary: {
      400: "#599B7B",
      100: "##ACCDBD",
      50: "#DEEBE5",
    },

    error: "#E26E6A",
    success: "#5FC381",
    "shade-black": "#1B1C1E",
    "shade-white": "#FAF9F6",
    "grey-600": "#475367",
    "grey-400": "#98A2B3",
  },

  bg: {
    "bg-color": "#1B1C1EE5",
    "dark-bg": "#121212",
    white: "#ffffff",
  },

  buttons: {
    disabled: "#90BCA7",
    bg: "#599B7B",
    text: "#FFFFFF",
  },

  icons: {
    active: "#599B7B",
    inactive: "#98A2B3",
    width: "18px",
    height: "20px",
  },
});
