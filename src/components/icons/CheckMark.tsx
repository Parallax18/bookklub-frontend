import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const CheckMark = (props: IconProps) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.6866 7.227C21.0882 6.84778 21.1062 6.21488 20.727 5.81337C20.3478 5.41185 19.7149 5.39378 19.3134 5.773L8.35339 16.1245L4.68664 12.6613C4.28513 12.2821 3.65222 12.3001 3.273 12.7017C2.89378 13.1032 2.91185 13.7361 3.31336 14.1153L7.66675 18.227C8.05215 18.591 8.65463 18.591 9.04003 18.227L20.6866 7.227Z"
        fill="#FAF9F6"
      />
    </Icon>
  );
};

export default CheckMark;
