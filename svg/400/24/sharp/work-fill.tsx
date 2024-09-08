import type { SVGProps } from "react";
export const SvgWorkFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80Z" />
  </svg>
);
