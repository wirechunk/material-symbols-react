import type { SVGProps } from "react";
export const SvgMargin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm72-72h528v-528H216v528Zm0 0v-528 528Zm72-384v-72h72v72h-72Zm156 0v-72h72v72h-72Zm156 0v-72h72v72h-72ZM288-432v-72h72v72h-72Zm156 0v-72h72v72h-72Zm156 0v-72h72v72h-72Z" />
  </svg>
);
