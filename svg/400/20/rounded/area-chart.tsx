import type { SVGProps } from "react";
export const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-192v-480l144 96 192-240 192 144h144v480H144Zm192-120 144-197 264 211v-302h-96L492-717 303-480l-87-58v136l120 90Z" />
  </svg>
);
