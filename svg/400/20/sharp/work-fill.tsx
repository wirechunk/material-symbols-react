import type { SVGProps } from "react";
export const SvgWorkFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-144v-576h240v-144h288v144h240v576H96Zm312-576h144v-72H408v72Z" />
  </svg>
);
