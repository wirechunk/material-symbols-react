import type { SVGProps } from "react";
export const SvgGradientFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-164v-632h632v632H164Zm244-316v72h72v-72h-72Zm-144 0v72h72v-72h-72Zm72 72v72h72v-72h-72Zm144 0v72h72v-72h-72Zm-264 0v72h48v-72h-48Zm336-72v72h72v72h72v-72h-72v-72h-72ZM264-336v72h-48v48h48v-48h72v48h72v-48h72v48h72v-48h72v48h72v-48h-72v-72h-72v72h-72v-72h-72v72h-72v-72h-72Zm480-144h-48v72h48v-72Zm-48 144v72h48v-72h-48Z" />
  </svg>
);
