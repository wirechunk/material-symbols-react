import type { SVGProps } from "react";
export const SvgIframeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M432-384v-168h288v168H432ZM96-192v-576h768v576H96Zm72-72h624v-360H168v360Z" />
  </svg>
);
