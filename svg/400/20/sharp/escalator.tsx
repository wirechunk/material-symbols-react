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
    <path d="M240-264h178l184.15-324H720v-108H542L357.85-372H240v108Zm-96 120v-672h672v672H144Zm72-72h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
