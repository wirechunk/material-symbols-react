import type { SVGProps } from "react";
export const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m408-549 72-36 72 36v-195H408v195ZM288-288v-72h192v72H288ZM144-144v-672h672v672H144Zm72-600v528-528Zm0 528h528v-528H624v312l-144-72-144 72v-312H216v528Z" />
  </svg>
);
