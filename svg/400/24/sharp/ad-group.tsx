import type { SVGProps } from "react";
export const SvgAdGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-320h480v-400H320v400Zm-80 80v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z" />
  </svg>
);
