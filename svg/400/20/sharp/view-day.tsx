import type { SVGProps } from "react";
export const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-192v-72h672v72H144Zm0-144v-288h672v288H144Zm72-72h528v-144H216v144Zm-72-288v-72h672v72H144Zm72 288v-144 144Z" />
  </svg>
);
