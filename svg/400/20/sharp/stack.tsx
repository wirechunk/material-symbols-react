import type { SVGProps } from "react";
export const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-408v72H96v-528h528v168h-72v-96H168v384h96Zm72 312v-528h528v528H336Zm72-72h384v-384H408v384Zm192-192Z" />
  </svg>
);
