import type { SVGProps } from "react";
export const SvgTv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-144v-96H96v-576h768v576H624v96H336ZM168-312h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
