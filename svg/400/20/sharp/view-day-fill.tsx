import type { SVGProps } from "react";
export const SvgViewDayFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-192v-72h672v72H144Zm0-144v-288h672v288H144Zm0-360v-72h672v72H144Z" />
  </svg>
);
