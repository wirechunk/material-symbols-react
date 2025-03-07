import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm72-504h528v-96H216v96Zm528 72H216v360h528v-360Zm-528-72v72-72Zm0 0v-96 96Zm0 72v360-360Z" />
  </svg>
);
