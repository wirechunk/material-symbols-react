import type { SVGProps } from "react";
export const SvgGifFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-384v-192h48v192h-48Zm-192 0v-192h144v48h-96v96h48v-48h48v96H288Zm288 0v-192h144v48h-96v32h64v48h-64v64h-48Z" />
  </svg>
);
