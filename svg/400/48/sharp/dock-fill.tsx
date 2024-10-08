import type { SVGProps } from "react";
export const SvgDockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-40v-60h320v60H320ZM220-160v-760h520v760H220Zm60-180h400v-400H280v400Z" />
  </svg>
);
