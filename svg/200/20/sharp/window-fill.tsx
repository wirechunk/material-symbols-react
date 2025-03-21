import type { SVGProps } from "react";
export const SvgWindowFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M496-464h280v280H496v-280Zm0-32v-280h280v280H496Zm-32 0H184v-280h280v280Zm0 32v280H184v-280h280Z" />
  </svg>
);
