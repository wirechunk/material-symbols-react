import type { SVGProps } from "react";
export const SvgExpandContent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-240v-240h72v168h168v72H240Zm408-240v-168H480v-72h240v240h-72Z" />
  </svg>
);
