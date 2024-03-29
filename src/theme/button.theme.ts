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
  },

  _disabled: {
    bg: "primary.100",
  },

  _loading: {
    bg: "primary.100",
  },

  variants: {
    rounded: {
      bg: "primary.400",
      borderRadius: "32px",
    },
  },
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
