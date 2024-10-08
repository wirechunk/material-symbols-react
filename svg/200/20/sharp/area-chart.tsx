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
    <path d="M184-232v-360l113.23 72.92 190.46-239.23L658.15-632H776v400H184Zm152-80 144-197 264 211v-302h-96L492-717 303-480l-87-58v136l120 90Z" />
  </svg>
);
