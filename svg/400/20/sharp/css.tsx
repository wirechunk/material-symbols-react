import type { SVGProps } from "react";
export const SvgCss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M408-384v-60h48v12h48v-36h-96v-108h144v60h-48v-12h-48v36h96v108H408Zm216 0v-60h48v12h48v-36h-96v-108h144v60h-48v-12h-48v36h96v108H624Zm-432 0v-192h144v60h-48v-12h-48v96h48v-12h48v60H192Z" />
  </svg>
);
