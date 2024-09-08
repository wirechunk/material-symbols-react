import type { SVGProps } from "react";
export const SvgPaddingFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-600h72v-72h-72v72Zm156 0h72v-72h-72v72Zm156 0h72v-72h-72v72ZM144-144v-672h672v672H144Z" />
  </svg>
);
