import type { SVGProps } from "react";
export const SvgBallot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-564h192v-72H480v72Zm0 240h192v-72H480v72ZM288-528h144v-144H288v144Zm0 240h144v-144H288v144ZM144-144v-672h672v672H144Zm72-72h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
