import type { SVGProps } from "react";
export const SvgCapture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M162.87-151.87q-37.78 0-64.39-26.61t-26.61-64.39v-474.26q0-37.78 26.61-64.39t64.39-26.61h634.26q37.78 0 64.39 26.61t26.61 64.39v474.26q0 37.78-26.61 64.39t-64.39 26.61H162.87Zm0-91h634.26v-474.26H162.87v474.26Zm80-80h474.26v-314.26H242.87v314.26Zm-80 80v-474.26 474.26Z" />
  </svg>
);
