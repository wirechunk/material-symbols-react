import type { SVGProps } from "react";
export const SvgMagnificationSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M220-540h120v-120H220v120ZM120-200v-560h720v560H120Zm40-40h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
);
