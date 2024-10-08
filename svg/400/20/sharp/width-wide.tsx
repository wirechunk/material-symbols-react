import type { SVGProps } from "react";
export const SvgWidthWide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-72h72v-432h-72v432Zm144 0h336v-432H312v432Zm408 0h72v-432h-72v432ZM312-696v432-432Z" />
  </svg>
);
