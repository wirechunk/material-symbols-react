import type { SVGProps } from "react";
export const SvgExplicit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-288h240v-72H432v-84h168v-72H432v-84h168v-72H360v384ZM144-144v-672h672v672H144Zm72-72h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
