import type { SVGProps } from "react";
export const SvgGif = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M460-360v-240h60v240h-60Zm-260 0v-240h200v60H260v120h80v-60h60v120H200Zm380 0v-240h180v60H640v40h80v60h-80v80h-60Z" />
  </svg>
);
