import type { SVGProps } from "react";
export const SvgFirstPageFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-288v-384h72v384h-72Zm384 0L480-480l192-192 51 51-141 141 141 141-51 51Z" />
  </svg>
);
