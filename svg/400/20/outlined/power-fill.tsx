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
    <path d="M384-144v-96L240-384v-216q0-30 21-51t51-21h54l-30 44v-188h72v144h144v-144h72v188l-30-44h54q30 0 51 21t21 51v216L576-240v96H384Z" />
  </svg>
);
