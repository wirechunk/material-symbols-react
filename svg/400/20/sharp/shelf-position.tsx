import type { SVGProps } from "react";
export const SvgShelfPosition = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm72-72h528v-108H216v108Zm432-180h96v-348h-96v348Zm-432 0h96v-348h-96v348Zm168 0h192v-348H384v348Z" />
  </svg>
);
