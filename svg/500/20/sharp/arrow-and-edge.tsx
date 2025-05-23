import type { SVGProps } from "react";
export const SvgArrowAndEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480.24-136.11 328.35-287.76l57.89-58.13 52.5 51.74v-130.69q0-32.66-22.82-55.55-22.83-22.89-55.4-22.89H62.43v-320.85h83v237.85h215.09q35.99 0 66.76 14.35 30.77 14.35 52.96 39.19 22.19-24.84 52.96-39.19 30.77-14.35 66.76-14.35h214.61v-237.85h83v320.85H599.72q-32.57 0-55.28 22.82-22.7 22.83-22.7 55.39v130.92l51.2-51.9 58.95 58.29-151.65 151.65Z" />
  </svg>
);
