import type { SVGProps } from "react";
export const SvgFloor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-96v-72h144v-168h168v-168h168v-168h168v-144h72v216H696v168H528v168H360v168H144Z" />
  </svg>
);
