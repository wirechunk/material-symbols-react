import type { SVGProps } from "react";
export const SvgTableBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m240-192 79-168h125v-168q-148-5-248-38.5T96-648q0-53 112-86.5T479.55-768q160.51 0 272.48 33.5Q864-701 864-648q0 48-100.5 81.5T516-527.79V-360h125l79 168h-72l-48-96H360l-48 96h-72Zm239.5-408q92.5 0 173-14T773-648.5q-40-20.5-120.5-34t-173-13.5Q387-696 307-682.5t-120 34Q227-628 307-614t172.5 14Zm.5-42Z" />
  </svg>
);
