import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const SearchIcon = (props: IconProps) => {
  return (
    <Icon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.16667 1.66666C5.02454 1.66666 1.66667 5.02452 1.66667 9.16666C1.66667 13.3088 5.02454 16.6667 9.16667 16.6667C10.9375 16.6667 12.565 16.0529 13.8481 15.0266L16.9107 18.0892C17.2362 18.4147 17.7638 18.4147 18.0893 18.0892C18.4147 17.7638 18.4147 17.2362 18.0893 16.9107L15.0266 13.8481C16.0529 12.565 16.6667 10.9375 16.6667 9.16666C16.6667 5.02452 13.3088 1.66666 9.16667 1.66666ZM3.33334 9.16666C3.33334 5.945 5.94501 3.33332 9.16667 3.33332C12.3883 3.33332 15 5.945 15 9.16666C15 12.3883 12.3883 15 9.16667 15C5.94501 15 3.33334 12.3883 3.33334 9.16666Z"
        fill={"currentColor"}
      />
    </Icon>
  );
};

export default SearchIcon;