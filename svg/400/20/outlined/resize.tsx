import type { SVGProps } from "react";
export const SvgResize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M744-600v-144H592v-72h224v216h-72ZM144-144v-224h72v152h144v72H144Zm0-300v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 0v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-600v-72h72v72h-72Zm150 600v-72h72v72h-72Zm150 0v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Z" />
  </svg>
);
