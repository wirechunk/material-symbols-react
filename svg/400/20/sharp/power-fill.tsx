import type { SVGProps } from "react";
export const SvgPowerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M384-144v-96L240-384v-288h96v-144h72v144h144v-144h72v144h96v288L576-240v96H384Z" />
  </svg>
);
