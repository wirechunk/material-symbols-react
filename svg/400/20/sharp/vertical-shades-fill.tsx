import type { SVGProps } from "react";
export const SvgVerticalShadesFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-144v-72h96v-600h576v600h96v72H96Zm312-72h144v-528H408v528Z" />
  </svg>
);
