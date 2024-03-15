import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    "button-color-active": "#599B7B",
    "button-color-disabled": "#90BCA7",
    "primary-100": "#ACCDBD",
    "primary-50": "#DEEBE5",
    "bg-color": "#1B1C1EE5",
    "dark-bg": "#121212",
    "nav-icon-color": "#98A2B3",
    "shade-black": "#1B1C1E",
    "shade-white": "#FAF9F6",
    "grey-600": "#475367",
    "grey-400": "#98A2B3",
    "error-200": "#E26E6A",
    "success-200": "#5FC381",
  },

  "nav-bar": {
    bg: "#1b1c1e",
    padding: "0px, 16px",
    jusitfy: "space-between",
    border: "1px, 0px, 0px, 0px",
    "border-radius": "8px, 8px, 0px, 0px"
  },

  auth: {
    mode: {
      "google-login": {
        width: "396px",
        height: "56px",
        padding: "16px",
        gap: "10px",
        "border-radius": "8px",
        border: "1.5px",
        "border-color": "#475367",
        text: {
          weight: "700",
          size: "16px",
          "line-height": "23.2px",
          "text-align": "center",
          "font-color": "#faf9f6",
        },
        icon: {
          height: "24px",
          width: "20.22px",
          color: "#faf9f6",
        },
      },
      "apple-login": {
        width: "396px",
        height: "56px",
        padding: "16px",
        gap: "10px",
        "border-radius": "8px",
        border: "1.5px",
        "border-color": "#47537",
        text: {
          weight: "700",
          size: "16px",
          "line-height": "23.2px",
          "text-align": "center",
          "font-color": "#faf9f6",
        },
        icon: {
          height: "24px",
          width: "20.22px",
          color: "#faf9f6",
        },
      },
    },

    "email-login": {
      label: {
        weight: "500",
        size: "14px",
        "line-height": "20.3px",
        color: "faf9f6",
      },

      input: {
        width: "396px",
        height: "56px",
        border: {
          size: "1px",
          color: "#475367",
          "border-radius": "6px",
        },
        padding: "16px",
        bg: "#1b1c1e",
        placeholder: {
          weight: "400",
          size: "14px",
          "line-height": "20.3px",
          color: "#98A2B3",
        },
      },
    },

    "submit-button": {
      width: "396px",
      height: "55px",
      radius: "8px",
      padding: "16px, 24px",
      margin: "10px",
      "bg-disabled": "#accdbd",
      bg: "#599b7b",
      text: {
        weight: "700",
        size: "16px",
        "line-height": "23.2px",
        "text-align": "center",
        color: "fff",
      },
    },
  },
});
