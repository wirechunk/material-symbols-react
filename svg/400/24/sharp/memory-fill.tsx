import type { SVGProps } from "react";
export const SvgMemoryFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-360v-240h240v240H360Zm0 240v-80H200v-160h-80v-80h80v-80h-80v-80h80v-160h160v-80h80v80h80v-80h80v80h160v160h80v80h-80v80h80v80h-80v160H600v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400Z" />
  </svg>
);
