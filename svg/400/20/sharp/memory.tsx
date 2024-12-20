import type { SVGProps } from "react";
export const SvgMemory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M384-384v-192h192v192H384Zm72-72h48v-48h-48v48Zm-96 312v-96H240v-120h-96v-72h96v-96h-96v-72h96v-120h120v-96h72v96h96v-96h72v96h120v120h96v72h-96v96h96v72h-96v120H600v96h-72v-96h-96v96h-72Zm288-168v-336H312v336h336ZM480-480Z" />
  </svg>
);
