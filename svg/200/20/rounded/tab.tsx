import type { SVGProps } from "react";
export const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192.62-264h574.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93V-528H556.31q-12.23 0-20.27-8.04T528-556.31V-696H192.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v382.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69Zm0 32q-24.32 0-40.47-16.16T136-288.66v-383.01Q136-696 152.15-712t40.47-16h574.76q24.32 0 40.47 16.16t16.15 40.5v383.01Q824-264 807.85-248t-40.47 16H192.62ZM168-264v-432 432Z" />
  </svg>
);
