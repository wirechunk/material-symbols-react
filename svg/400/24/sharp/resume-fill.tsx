import type { SVGProps } from "react";
export const SvgResumeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-240v-480h80v480h-80Zm160 0 400-240-400-240v480Z" />
  </svg>
);
