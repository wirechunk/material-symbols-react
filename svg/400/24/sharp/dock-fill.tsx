import type { SVGProps } from "react";
export const SvgDockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-40v-80h320v80H320Zm-80-160v-720h480v720H240Zm80-200h320v-320H320v320Z" />
  </svg>
);
