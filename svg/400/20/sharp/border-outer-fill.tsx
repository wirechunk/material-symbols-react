import type { SVGProps } from "react";
export const SvgBorderOuterFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm150-300v-72h72v72h-72Zm150 150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 150v-72h72v72h-72Z" />
  </svg>
);
