import type { SVGProps } from "react";
export const SvgInsertChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-288h72v-288h-72v288Zm156 0h72v-384h-72v384Zm156 0h72v-144h-72v144ZM144-144v-672h672v672H144Zm72-72h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
