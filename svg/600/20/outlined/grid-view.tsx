import type { SVGProps } from "react";
export const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M124.78-528v-307.22H432V-528H124.78Zm0 403.22V-432H432v307.22H124.78ZM528-528v-307.22h307.22V-528H528Zm0 403.22V-432h307.22v307.22H528ZM222.78-626H334v-111.22H222.78V-626ZM626-626h111.22v-111.22H626V-626Zm0 403.22h111.22V-334H626v111.22Zm-403.22 0H334V-334H222.78v111.22ZM626-626Zm0 292Zm-292 0Zm0-292Z" />
  </svg>
);
