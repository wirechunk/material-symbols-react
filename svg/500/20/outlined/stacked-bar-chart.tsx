import type { SVGProps } from "react";
export const SvgStackedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M183.87-183.87v-392.85h151.17v392.85H183.87Zm0-441.09v-151.17h151.17v151.17H183.87Zm220.54 441.09v-295.65h151.18v295.65H404.41Zm0-344.13v-151.17h151.18V-528H404.41Zm220.55 344.13v-199.17h151.17v199.17H624.96Zm0-247.41v-151.18h151.17v151.18H624.96Z" />
  </svg>
);
