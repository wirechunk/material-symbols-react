import type { SVGProps } from "react";
export const SvgDeveloperMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M314-310 144-480l170-170 51 51-119 119 119 119-51 51Zm-122 22h72v48h432v-48h72v168q0 29.7-21.15 50.85Q725.7-48 696-48H264q-29.7 0-50.85-21.15Q192-90.3 192-120v-168Zm72-384h-72v-168q0-29.7 21.15-50.85Q234.3-912 264-912h432q29.7 0 50.85 21.15Q768-869.7 768-840v168h-72v-48H264v48Zm0 504v48h432v-48H264Zm0-624h432v-48H264v48Zm382 482-51-51 119-119-119-119 51-51 170 170-170 170ZM264-792v-48 48Zm0 624v48-48Z" />
  </svg>
);
