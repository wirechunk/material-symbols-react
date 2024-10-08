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
    <path d="M144-192v-72h672v72H144Zm0-504v-72h672v72H144Zm72 360q-29 0-50.5-21.5T144-408v-144q0-29.7 21.5-50.85Q187-624 216-624h528q29.7 0 50.85 21.15Q816-581.7 816-552v144q0 29-21.15 50.5T744-336H216Zm0-72h528v-144H216v144Zm0-144v144-144Z" />
  </svg>
);
