import type { SVGProps } from "react";
export const SvgHd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-384h48v-72h48v72h48v-192h-48v72h-48v-72h-48v192Zm240 0h117l27-27v-138l-27-27H528v192Zm48-48v-96h48v96h-48ZM96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
