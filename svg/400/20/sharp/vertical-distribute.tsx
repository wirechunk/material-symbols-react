import type { SVGProps } from "react";
export const SvgVerticalDistribute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-72h768v72H96Zm192-336v-96h384v96H288ZM96-792v-72h768v72H96Z" />
  </svg>
);
