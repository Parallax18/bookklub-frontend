import { Icon, IconProps } from '@chakra-ui/react';

const CrossIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1C10 0.447715 9.55229 0 9 0C8.44772 0 8 0.447715 8 1V8H1C0.447715 8 0 8.44772 0 9C0 9.55229 0.447715 10 1 10H8V17C8 17.5523 8.44772 18 9 18C9.55229 18 10 17.5523 10 17V10H17C17.5523 10 18 9.55229 18 9C18 8.44772 17.5523 8 17 8H10V1Z"
        fill={'currentColor'}
      />
    </svg>
  </Icon>
);

export default CrossIcon;
