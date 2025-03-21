import type { SVGProps } from "react";
export const SvgSettopComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-280v-400h800v400H80Zm80-80h640v-240H160v240Zm40-80h240v-80H200v80Zm320 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm-480 80v-240 240Z" />
  </svg>
);
