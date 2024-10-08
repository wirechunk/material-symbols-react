import type { SVGProps } from "react";
export const SvgHighQuality = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M576-336h48v-48h48v-192H528v192h48v48Zm-288-48h48v-72h48v72h48v-192h-48v72h-48v-72h-48v192Zm288-48v-96h48v96h-48ZM96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
