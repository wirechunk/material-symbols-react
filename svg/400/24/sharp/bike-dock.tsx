import type { SVGProps } from "react";
export const SvgBikeDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-80l170-49 70-591h240l70 591 170 49v80H120Zm320-120h80v-520h-80v520Z" />
  </svg>
);
