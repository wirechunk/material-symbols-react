import type { SVGProps } from "react";
export const SvgExplicitFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-280h240v-80H440v-80h160v-80H440v-80h160v-80H360v400ZM120-120v-720h720v720H120Z" />
  </svg>
);
