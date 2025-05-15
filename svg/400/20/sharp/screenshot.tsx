import type { SVGProps } from "react";
export const SvgScreenshot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M624-336h-72v96h-96v72h168v-168ZM336-624h72v-96h96v-72H336v168ZM216-48v-864h528v216h48v192h-48v456H216Zm72-72h384v-720H288v720Zm0 0v-720 720Z" />
  </svg>
);
