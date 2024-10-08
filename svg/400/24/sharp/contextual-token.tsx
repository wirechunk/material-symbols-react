import type { SVGProps } from "react";
export const SvgContextualToken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-320h280v-120H240v120Zm360 0h120v-320H600v320ZM240-520h280v-120H240v120Zm-80 280h640v-480H160v480Zm-80 80v-640h800v640H80Zm80-80v-480 480Z" />
  </svg>
);
