import type { SVGProps } from "react";
export const SvgWidthFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-72h48v-432h-48v432Zm120 0h384v-432H288v432Zm456 0h48v-432h-48v432ZM288-696v432-432Z" />
  </svg>
);
