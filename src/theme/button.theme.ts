export const Button = {
  baseStyle: {
    lineHeight: "1.2",
    transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
    border: "none",
    p: "16px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "700",
    bg: "primary.400",
    color: "shade.white",
    outline: "none",
    _disabled: {
      opacity: 1,
      bg: "primary.100",
      _hover: {
        opacity: "1",
        bg: "primary.100",
      },
    },
    _loading: {
      opacity: 1,
      bg: "primary.100",
      _hover: {
        opacity: "1",
        bg: "primary.100",
      },
    },
  },

  variants: {
    rounded: {
      bg: "primary.400",
      borderRadius: "32px",
    },
    outlined: {
      bg: "transparent",
      borderRadius: "2rem",
      border: "1px",
      borderColor: "grey.600",
    },
  },
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
