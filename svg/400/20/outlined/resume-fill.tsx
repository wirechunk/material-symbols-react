import type { SVGProps } from "react";
export const SvgResumeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-240v-480h72v480h-72Zm144 0 384-240-384-240v480Z" />
  </svg>
);
