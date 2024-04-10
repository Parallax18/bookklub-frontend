import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const ChevronDownIcon = (props: IconProps) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.34557 7.27318L8.85777 13.4023C9.49952 14.0063 10.5006 14.0063 11.1423 13.4023L17.6545 7.27318C17.9897 6.95775 18.0056 6.43035 17.6902 6.09521C17.3748 5.76006 16.8474 5.74408 16.5122 6.05951L10 12.1886L3.48785 6.05951C3.1527 5.74408 2.62531 5.76006 2.30988 6.09521C1.99445 6.43035 2.01043 6.95775 2.34557 7.27318Z"
        fill="#98A2B3"
      />
    </Icon>
  );
};

export default ChevronDownIcon;
