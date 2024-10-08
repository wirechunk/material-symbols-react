import type { SVGProps } from "react";
export const SvgTableChartView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m296-80-56-56 276-277 140 140 207-207 57 57-264 263-140-140L296-80Zm-136-40H80v-720h720v280H160v440Zm0-520h560v-120H160v120Zm0 0v-120 120Z" />
  </svg>
);
