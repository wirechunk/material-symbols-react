import type { SVGProps } from "react";
export const SvgSplitscreenLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h288v672H144Zm384 0v-672h288v672H528Zm216-600H600v528h144v-528Z" />
  </svg>
);
