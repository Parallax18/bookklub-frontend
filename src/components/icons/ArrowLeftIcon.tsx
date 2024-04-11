import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const ArrowLeftIcon = (props: IconProps) => {
  return (
    <Icon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M1.91076 10.5893C1.58533 10.2639 1.58533 9.73622 1.91076 9.41078L5.2441 6.07745C5.56954 5.75201 6.09717 5.75201 6.42261 6.07745C6.74805 6.40289 6.74805 6.93053 6.42261 7.25596L4.51186 9.16671L17.5 9.16671C17.9603 9.16671 18.3334 9.5398 18.3334 10C18.3334 10.4603 17.9603 10.8334 17.5 10.8334L4.51186 10.8334L6.42261 12.7441C6.74805 13.0696 6.74805 13.5972 6.42261 13.9226C6.09717 14.2481 5.56954 14.2481 5.2441 13.9226L1.91076 10.5893Z"
        fill="#FAF9F6"
      />
    </Icon>
  );
};

export default ArrowLeftIcon;
