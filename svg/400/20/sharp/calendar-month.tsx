import type { SVGProps } from "react";
export const SvgCalendarMonth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M444-384v-72h72v72h-72Zm-156 0v-72h72v72h-72Zm312 0v-72h72v72h-72ZM444-240v-72h72v72h-72Zm-156 0v-72h72v72h-72Zm312 0v-72h72v72h-72ZM144-96v-672h144v-96h72v96h240v-96h72v96h144v672H144Zm72-72h528v-360H216v360Zm0-432h528v-96H216v96Zm0 0v-96 96Z" />
  </svg>
);
