import type { SVGProps } from "react";
export const SvgSd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm120-120h144v-108h-96v-36h48v12h48v-60H288v108h96v36h-48v-12h-48v60Zm240 0h117l27-27v-138l-27-27H528v192Zm48-48v-96h48v96h-48ZM168-264v-432 432Z" />
  </svg>
);
