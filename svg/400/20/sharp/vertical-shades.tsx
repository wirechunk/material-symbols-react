import type { SVGProps } from "react";
export const SvgVerticalShades = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-144v-72h96v-600h576v600h96v72H96Zm168-72h72v-528h-72v528Zm144 0h144v-528H408v528Zm216 0h72v-528h-72v528Zm-360 0v-528 528Zm432 0v-528 528Z" />
  </svg>
);
