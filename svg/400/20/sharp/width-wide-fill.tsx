import type { SVGProps } from "react";
export const SvgWidthWideFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-72h72v-432h-72v432Zm552 0h72v-432h-72v432Z" />
  </svg>
);
