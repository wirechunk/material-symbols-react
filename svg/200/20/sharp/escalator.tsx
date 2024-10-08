import type { SVGProps } from "react";
export const SvgEscalator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M275.38-299.38h124.16l184.14-324h100.94v-37.24H560.46l-184.14 324H275.38v37.24ZM184-184v-592h592v592H184Zm32-32h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
