import type { SVGProps } from "react";
export const SvgFlagFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z" />
  </svg>
);
