import type { SVGProps } from "react";
export const SvgGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M408-408v-72h72v72h-72Zm-72 72v-72h72v72h-72Zm144 0v-72h72v72h-72Zm72-72v-72h72v72h-72Zm-288 0v-72h72v72h-72ZM144-144v-672h672v672H144Zm120-72h72v-48h-72v48Zm144 0h72v-48h-72v48Zm288 0h48v-48h-48v48Zm-480-48h48v-72h72v72h72v-72h72v72h72v-72h72v72h72v-72h-72v-72h72v-72h48v-264H216v336h48v72h-48v72Zm0 48v-528 528Zm480-192v72h48v-72h-48ZM552-264v48h72v-48h-72Z" />
  </svg>
);
