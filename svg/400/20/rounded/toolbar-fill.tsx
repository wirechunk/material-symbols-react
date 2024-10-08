import type { SVGProps } from "react";
export const SvgToolbarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M211-144q-29 0-48-19t-19-48v-365h672v365q0 29-18.5 48T749-144H211Zm-67-504v-101q0-30 19-48.5t48-18.5h538q30 0 48.5 18.5T816-749v101H144Z" />
  </svg>
);
