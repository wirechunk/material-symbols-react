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
    <path d="M164-212v-420l128.62 84.46 191.23-239.61L665.08-652H796v440H164Zm172-100 144-197 264 211v-302h-96L492-717 303-480l-87-58v136l120 90Z" />
  </svg>
);
