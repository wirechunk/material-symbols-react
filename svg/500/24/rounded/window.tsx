import type { SVGProps } from "react";
export const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M202.87-111.87q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61h554.26q37.78 0 64.39 26.61t26.61 64.39v554.26q0 37.78-26.61 64.39t-64.39 26.61H202.87ZM520-440v237.13h237.13V-440H520Zm0-80h237.13v-237.13H520V-520Zm-80 0v-237.13H202.87V-520H440Zm0 80H202.87v237.13H440V-440Z" />
  </svg>
);
