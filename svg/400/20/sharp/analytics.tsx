import type { SVGProps } from "react";
export const SvgAnalytics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm72-72h528v-528H216v528Zm72-72h72v-192h-72v192Zm312 0h72v-384h-72v384Zm-156 0h72v-144h-72v144Zm0-192h72v-72h-72v72ZM216-216v-528 528Z" />
  </svg>
);
