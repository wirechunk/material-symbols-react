import type { SVGProps } from "react";
export const SvgLooksOneFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-288h72v-384H384v72h96v312Zm336 144H144v-672h672v672Z" />
  </svg>
);
