import type { SVGProps } from "react";
export const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M444-96v-192H240l-96-108 96-108h204v-72H192v-216h252v-72h72v72h204l96 108-96 108H516v72h252v216H516v192h-72ZM264-648h424l32-36-32-36H264v72Zm8 288h424v-72H272l-32 36 32 36Zm-8-288v-72 72Zm432 288v-72 72Z" />
  </svg>
);
