import type { SVGProps } from "react";
export const SvgDisplaySettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-384h48v-144h-48v48h-48v48h48v48Zm96-48h336v-48H384v48Zm240-96h48v-48h48v-48h-48v-48h-48v144Zm-384-48h336v-48H240v48Zm96 432v-96H168q-29.7 0-50.85-21.16Q96-282.32 96-312.04v-432.24Q96-774 117.15-795T168-816h624q29.7 0 50.85 21.16Q864-773.68 864-743.96v432.24Q864-282 842.85-261T792-240H624v96H336ZM168-312h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
