import type { SVGProps } from "react";
export const SvgIframe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M473.85-425.85h204.3v-84.3h-204.3v84.3Zm-35.7 35.7v-155.7h275.7v155.7h-275.7ZM180.31-212q-27.01 0-45.66-18.66Q116-249.32 116-276.35v-407.62q0-27.03 18.65-45.53t45.66-18.5h599.38q27.01 0 45.66 18.66Q844-710.68 844-683.65v407.62q0 27.03-18.65 45.53T779.69-212H180.31Zm0-52h599.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-624H168v347.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z" />
  </svg>
);
