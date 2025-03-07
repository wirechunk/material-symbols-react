import type { SVGProps } from "react";
export const SvgMemoryFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M384-384v-192h192v192H384Zm-24 240v-96h-48q-29 0-50.5-21.5T240-312v-48h-96v-72h96v-96h-96v-72h96v-48q0-29 21.5-50.5T312-720h48v-96h72v96h96v-96h72v96h48q29 0 50.5 21.5T720-648v48h96v72h-96v96h96v72h-96v48q0 29-21.5 50.5T648-240h-48v96h-72v-96h-96v96h-72Zm288-168v-336H312v336h336Z" />
  </svg>
);
