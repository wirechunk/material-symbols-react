import type { SVGProps } from "react";
export const SvgTransitionSlide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M40-160v-640h240v640H40Zm80-79h80v-482h-80v482Zm240 79v-640h560v640H360Zm80-79h400v-482H440v482Zm-240 0v-482 482Zm240 0v-482 482Z" />
  </svg>
);
