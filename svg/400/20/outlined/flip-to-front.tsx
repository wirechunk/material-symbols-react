import type { SVGProps } from "react";
export const SvgFlipToFront = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-288q-29.7 0-50.85-21.15Q288-330.3 288-360v-384q0-29.7 21.15-50.85Q330.3-816 360-816h384q29.7 0 50.85 21.15Q816-773.7 816-744v384q0 29.7-21.15 50.85Q773.7-288 744-288H360Zm0-72h384v-384H360v384ZM216-216v72q-29.7 0-50.85-21.15Q144-186.3 144-216h72Zm-72-80v-72h72v72h-72Zm0-152v-72h72v72h-72Zm0-152v-72h72v72h-72Zm152 456v-72h72v72h-72Zm152 0v-72h72v72h-72Zm152 0v-72h72v72h-72Z" />
  </svg>
);
