import type { SVGProps } from "react";
export const Svg2DFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M312-384h144v-48h-96v-28h96v-116H312v48h96v28h-96v116ZM144-144v-672h672v672H144Zm360-240h117l27-27v-138l-27-27H504v192Zm48-48v-96h48v96h-48Z" />
  </svg>
);
