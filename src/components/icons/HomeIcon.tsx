import { Icon, IconProps } from "@chakra-ui/react";

const HomeIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.8617 11.6536L21.2288 19.2491C21.0992 20.804 19.7994 22 18.2391 22H5.75994C4.19968 22 2.89988 20.804 2.7703 19.2491L2.13734 11.6536C2.0516 10.6246 2.50098 9.62392 3.32698 9.00442L10.1995 3.85C11.2662 3.05 12.7329 3.05 13.7995 3.85L20.6721 9.00442C21.4981 9.62392 21.9475 10.6246 21.8617 11.6536ZM9.99957 20.5L9.70719 16.9914C9.59543 15.6502 10.6538 14.5 11.9996 14.5C13.3454 14.5 14.4037 15.6502 14.292 16.9914L13.9996 20.5H9.99957Z"
      fill={"currentColor"}
    />
  </Icon>
);

export default HomeIcon;
