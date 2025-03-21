import type { SVGProps } from "react";
export const SvgStackedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M151.87-151.87v-448.85h167.17v448.85H151.87Zm0-489.09v-167.17h167.17v167.17H151.87Zm244.54 489.09v-327.65h167.18v327.65H396.41Zm0-368.13v-167.17h167.18V-520H396.41Zm244.55 368.13v-207.17h167.17v207.17H640.96Zm0-247.41v-167.18h167.17v167.18H640.96Z" />
  </svg>
);
