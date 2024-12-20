import type { SVGProps } from "react";
export const SvgConvertToText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-96v-72h101q-45-24-73-68.5T48-336q0-79.83 56.08-135.92Q160.17-528 240-528v72q-50 0-85 34.91T120-336q0 44 27 77t69 41v-118h72v240H48Zm432-384ZM360-144v-72h384v-528H216v144h-72v-216h672v672H360Zm0-144h216v-72H360v72Zm0-156h312v-72H360v72Zm-72-156h384v-72H288v72Z" />
  </svg>
);
