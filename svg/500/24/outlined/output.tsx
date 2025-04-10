import type { SVGProps } from "react";
export const SvgOutput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M202.87-111.87q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61h554.5q37.78 0 64.39 26.61t26.61 64.39v76.41h-91v-76.41h-554.5v554.26h554.5v-76.41h91v76.41q0 37.78-26.61 64.39t-64.39 26.61h-554.5Zm481.2-164.06-63.66-63.66 93.92-94.91H353.78v-91h360.55l-93.92-94.91 63.66-63.66L888.13-480 684.07-275.93Z" />
  </svg>
);
