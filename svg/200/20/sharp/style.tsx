import type { SVGProps } from "react";
export const SvgStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m181.85-155-68.08-38.85 68.08-146.54V-155Zm102.77-224.08 104.76 278.46H284.62v-278.46Zm201.92 251.31L292.46-656.92l352.85-128.54 195.84 533.38-354.61 124.31ZM451.48-552q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71T451.9-624q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm54.21 384 294-105-171-471-294 107 171 469Zm-171-469 294-107-294 107Z" />
  </svg>
);
