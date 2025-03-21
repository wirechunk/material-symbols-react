import type { SVGProps } from "react";
export const SvgLineEndArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-240v-204H96v-72h384v-204l384 240-384 240Zm72-130 176-110-176-110v220Zm0-110Z" />
  </svg>
);
