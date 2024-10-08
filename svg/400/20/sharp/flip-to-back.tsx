import type { SVGProps } from "react";
export const SvgFlipToBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-528h72v456h456v72H144Zm144-144v-72h72v72h-72Zm0-152v-72h72v72h-72Zm0-152v-72h72v72h-72Zm0-152v-72h72v72h-72Zm152 456v-72h72v72h-72Zm0-456v-72h72v72h-72Zm152 0v-72h72v72h-72Zm0 456v-72h72v72h-72Zm152-456v-72h72v72h-72Zm0 456v-72h72v72h-72Zm0-152v-72h72v72h-72Zm0-152v-72h72v72h-72Z" />
  </svg>
);
