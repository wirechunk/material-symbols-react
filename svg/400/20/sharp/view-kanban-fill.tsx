import type { SVGProps } from "react";
export const SvgViewKanbanFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-288h72v-384h-72v384Zm156-192h72v-192h-72v192Zm156 96h72v-288h-72v288ZM144-144v-672h672v672H144Z" />
  </svg>
);
