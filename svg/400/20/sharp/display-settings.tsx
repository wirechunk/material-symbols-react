import type { SVGProps } from "react";
export const SvgDisplaySettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-384h48v-144h-48v48h-48v48h48v48Zm96-48h336v-48H384v48Zm240-96h48v-48h48v-48h-48v-48h-48v144Zm-384-48h336v-48H240v48Zm96 432v-96H96v-576h768v576H624v96H336ZM168-312h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
