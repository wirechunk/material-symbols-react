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
    <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-456h72v456h456v72H216Zm144-216v72q-29.7 0-50.85-21.15Q288-330.3 288-360h72Zm-72-80v-72h72v72h-72Zm0-152v-72h72v72h-72Zm72-152h-72q0-29.7 21.15-50.85Q330.3-816 360-816v72Zm80 456v-72h72v72h-72Zm0-456v-72h72v72h-72Zm152 0v-72h72v72h-72Zm0 456v-72h72v72h-72Zm152-456v-72q29.7 0 50.85 21.15Q816-773.7 816-744h-72Zm0 384h72q0 29.7-21.15 50.85Q773.7-288 744-288v-72Zm0-80v-72h72v72h-72Zm0-152v-72h72v72h-72Z" />
  </svg>
);
