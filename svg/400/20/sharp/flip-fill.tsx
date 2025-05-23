import type { SVGProps } from "react";
export const SvgFlipFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M594-744v-72h72v72h-72Zm0 600v-72h72v72h-72Zm150-600v-72h72v72h-72Zm0 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72ZM385-144H144v-672h241v72H216v528h169v72Zm59 96v-864h72v864h-72Z" />
  </svg>
);
