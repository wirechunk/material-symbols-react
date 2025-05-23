import type { SVGProps } from "react";
export const SvgIosFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-600v-80h80v80h-80Zm0 320v-240h80v240h-80Zm120 0v-400h240v400H280Zm80-80h80v-240h-80v240Zm200 80v-80h160v-80H560v-240h240v80H640v80h160v240H560Z" />
  </svg>
);
