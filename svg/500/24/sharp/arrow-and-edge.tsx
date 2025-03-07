import type { SVGProps } from "react";
export const SvgArrowAndEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480.24-112.11 312.35-279.76l63.89-64.13 58.5 57.74v-146.92q0-35.86-25.17-61.04-25.18-25.17-61.05-25.17H30.43v-328.85h91v237.85h227.09q39.59 0 73.46 15.69 33.87 15.7 58.26 42.85 24.39-27.15 58.26-42.85 33.87-15.69 73.46-15.69h226.61v-237.85h91v328.85H611.72q-35.87 0-60.93 25.17-25.05 25.18-25.05 61.04v146.92l57.5-57.5 64.65 63.89-167.65 167.65Z" />
  </svg>
);
