import type { SVGProps } from "react";
export const SvgMouseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480.24-96Q360-96 276-179.83 192-263.66 192-384v-144h576v144q0 120.34-83.76 204.17Q600.48-96 480.24-96ZM192-600q0-103 73.5-175.5T444-861v261H192Zm324 0v-261q105 14 178.5 86T768-600H516Z" />
  </svg>
);
