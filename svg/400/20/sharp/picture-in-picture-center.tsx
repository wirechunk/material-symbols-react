import type { SVGProps } from "react";
export const SvgPictureInPictureCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm0 0v-432 432Zm168-108h288v-216H336v216Z" />
  </svg>
);
