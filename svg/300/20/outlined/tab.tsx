import type { SVGProps } from "react";
export const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M180.31-264h599.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-528H528v-168H180.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v407.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Zm0 52q-27.01 0-45.66-18.66Q116-249.32 116-276.35v-407.62q0-27.03 18.65-45.53t45.66-18.5h599.38q27.01 0 45.66 18.66Q844-710.68 844-683.65v407.62q0 27.03-18.65 45.53T779.69-212H180.31ZM168-264v-432 432Z" />
  </svg>
);
