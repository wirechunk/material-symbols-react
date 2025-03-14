import type { SVGProps } from "react";
export const SvgBikeDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-60l197-50 63-610h200l63 610 197 50v60H120Zm320-100h80v-560h-80v560Z" />
  </svg>
);
