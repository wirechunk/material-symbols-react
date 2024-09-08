import type { SVGProps } from "react";
export const SvgVariables = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-288v-384h672v384H144Zm72-72h528v-240H216v240Zm0 0v-240 240Z" />
  </svg>
);
