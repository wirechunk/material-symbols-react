import type { SVGProps } from "react";
export const SvgViewRealSize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-288v-312h-96v-72h168v384h-72Zm156 0v-72h72v72h-72Zm204 0v-312h-96v-72h168v384h-72ZM444-456v-72h72v72h-72Z" />
  </svg>
);
