import type { SVGProps } from "react";
export const SvgAtm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M408-384v-144h-72v-48h192v48h-72v144h-48Zm-264 0v-192h144v192h-48v-48h-48v48h-48Zm48-96h48v-48h-48v48Zm384 96v-192h240v192h-48v-144h-48v96h-48v-96h-48v144h-48Z" />
  </svg>
);
