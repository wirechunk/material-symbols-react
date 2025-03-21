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
    <path d="m240-192 60-127q8-20 25-30.5t40-10.5h79v-168q-148-5-248-38.5T96-648q0-53 112-86.5T480-768q160 0 272 33.5T864-648q0 48-100.5 81.5T516-528v168h79q23 0 40 10.5t25 30.5l60 127h-72l-48-96H360l-48 96h-72Zm240-408q92 0 172.5-14T773-648q-40-21-120.5-34.5T480-696q-93 0-173 13.5T187-648q40 20 120 34t173 14Zm0-42Z" />
  </svg>
);
