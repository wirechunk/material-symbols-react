import type { SVGProps } from "react";
export const SvgTabs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm72-72h528v-264H216v264Zm0-336h528v-192H216v192Zm240-72h240v-72H456v72Zm-240 60v-180 180Z" />
  </svg>
);
