import type { SVGProps } from "react";
export const SvgMagnifyDocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm80-160h640v-400H160v400Zm400-80h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z" />
  </svg>
);
