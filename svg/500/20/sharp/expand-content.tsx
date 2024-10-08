import type { SVGProps } from "react";
export const SvgExpandContent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M234.5-234.5v-251h83v168h168v83h-251Zm408-240v-168h-168v-83h251v251h-83Z" />
  </svg>
);
