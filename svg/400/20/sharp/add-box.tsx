import type { SVGProps } from "react";
export const SvgAddBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M444-288h72v-156h156v-72H516v-156h-72v156H288v72h156v156ZM144-144v-672h672v672H144Zm72-72h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
