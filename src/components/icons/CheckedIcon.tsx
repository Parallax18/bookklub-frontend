import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const CheckedIcon = (props: IconProps) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="8" fill="#599B7B" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2534 4.72357C12.4061 4.86352 12.4164 5.10073 12.2764 5.2534L6.77643 11.2534C6.70732 11.3288 6.6104 11.3727 6.50815 11.3749C6.40589 11.3771 6.30716 11.3375 6.23483 11.2652L3.73483 8.76517C3.58839 8.61872 3.58839 8.38128 3.73483 8.23484C3.88128 8.08839 4.11872 8.08839 4.26517 8.23484L6.48822 10.4579L11.7236 4.74661C11.8635 4.59394 12.1007 4.58362 12.2534 4.72357Z"
        fill="#FAF9F6"
        stroke="#FAF9F6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CheckedIcon;
