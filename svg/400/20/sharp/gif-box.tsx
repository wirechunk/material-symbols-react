import type { SVGProps } from "react";
export const SvgGifBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm72-72h528v-528H216v528Zm240-168h48v-192h-48v192Zm-192 0h144v-96h-48v48h-48v-96h96v-48H264v192Zm288 0h48v-72h72v-48h-72v-24h96v-48H552v192ZM216-216v-528 528Z" />
  </svg>
);
