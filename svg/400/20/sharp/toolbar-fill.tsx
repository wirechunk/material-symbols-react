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
    <path d="M144-648v-168h672v168H144Zm0 504v-432h672v432H144Z" />
  </svg>
);
