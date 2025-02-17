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
    <path d="M320-40v-80h320v80H320Zm0-160q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h320q33 0 56.5 23.5T720-840v560q0 33-23.5 56.5T640-200H320Zm0-200h320v-320H320v320Z" />
  </svg>
);
