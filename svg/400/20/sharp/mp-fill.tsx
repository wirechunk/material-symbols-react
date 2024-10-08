import type { SVGProps } from "react";
export const SvgMpFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-384h48v-144h26v96h44v-96h26v144h48v-192H288v192Zm240 0h48v-48h96v-144H528v192Zm48-96v-48h48v48h-48ZM144-144v-672h672v672H144Z" />
  </svg>
);
