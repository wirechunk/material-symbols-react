import type { SVGProps } from "react";
export const SvgAddChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-288h72v-288h-72v288Zm156 0h72v-384h-72v384Zm156 0h72v-192h-72v192ZM144-144v-672h384v72H216v528h528v-312h72v384H144Zm528-456v-72h-72v-72h72v-72h72v72h72v72h-72v72h-72ZM480-480Z" />
  </svg>
);
