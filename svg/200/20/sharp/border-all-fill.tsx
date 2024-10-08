import type { SVGProps } from "react";
export const SvgBorderAllFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M496-184v-280h280v280H496Zm0-312v-280h280v280H496Zm-312 0v-280h280v280H184Zm0 312v-280h280v280H184Z" />
  </svg>
);
