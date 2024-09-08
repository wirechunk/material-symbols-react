import type { SVGProps } from "react";
export const SvgEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-320v-80h560v80H200Zm0-240v-80h560v80H200Z" />
  </svg>
);
