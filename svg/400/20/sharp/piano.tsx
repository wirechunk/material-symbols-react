import type { SVGProps } from "react";
export const SvgPiano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm72-72h120v-168h-48v-360h-72v528Zm408 0h120v-528h-72v360h-48v168Zm-240 0h192v-168h-48v-360h-96v360h-48v168Z" />
  </svg>
);
