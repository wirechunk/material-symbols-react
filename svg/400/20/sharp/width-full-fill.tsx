import type { SVGProps } from "react";
export const SvgWidthFullFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M95-192v-576h768v576H95Zm72-72h48v-432h-48v432Zm576 0h48v-432h-48v432Z" />
  </svg>
);
