import type { SVGProps } from "react";
export const SvgViewArrayFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-240v-480h96v480h-96Zm144 0v-480h384v480H288Zm432 0v-480h96v480h-96Z" />
  </svg>
);
