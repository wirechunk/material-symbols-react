import type { SVGProps } from "react";
export const SvgTrip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-144v-576h240v-144h288v144h240v576H96Zm312-576h144v-72H408v72Zm-168 72h-72v432h72v-432Zm408 432v-432H312v432h336Zm72-432v432h72v-432h-72ZM480-425Z" />
  </svg>
);
