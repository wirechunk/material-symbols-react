import type { SVGProps } from "react";
export const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96q-120 0-204-84t-84-204v-192q0-120 84-204t204-84q120 0 204 84t84 204v192q0 120-84 204T480-96Zm36-504h178q-8-72-57-124t-121-64v188Zm-250 0h178v-188q-72 11-121 63.5T266-600Zm214 432q89.64 0 152.82-63.18Q696-294.36 696-384v-144H264v144q0 89.64 63.18 152.82Q390.36-168 480-168Zm0-356Zm36-76Zm-72 0Zm36 76Z" />
  </svg>
);
