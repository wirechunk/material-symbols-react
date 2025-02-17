import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216h528v-332q-17 10-35.19 15-18.18 5-36.81 5-60 0-102-42t-42-101.93q0-19.07 5-37.07t15-35H216v528Zm-72 72v-672h672v672H144Zm72-600v528-528Z" />
  </svg>
);
