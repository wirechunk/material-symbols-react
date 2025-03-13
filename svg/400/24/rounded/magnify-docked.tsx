import type { SVGProps } from "react";
export const SvgMagnifyDocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-120v40h640v-40H160Zm0 0v40-40Zm0-80h640v-360H160v360Zm400-60h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z" />
  </svg>
);
