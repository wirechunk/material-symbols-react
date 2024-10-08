import type { SVGProps } from "react";
export const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-200v-400l129.23 96.92 198.46-279.23L666.15-640H800v440H160Zm161.69-66.38 160-221 287.54 224.07v-345.92H655.15L494.31-738.62l-198 279-105.54-78.84v167.08l130.92 105Z" />
  </svg>
);
