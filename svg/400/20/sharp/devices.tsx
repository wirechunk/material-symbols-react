import type { SVGProps } from "react";
export const SvgDevices = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-96h96v-480h624v72H264v408h216v96H96Zm480 0v-432h288v432H576Zm72-96h144v-264H648v264Zm0 0h144-144Z" />
  </svg>
);
