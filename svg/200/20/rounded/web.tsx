import type { SVGProps } from "react";
export const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192.62-232q-24.32 0-40.47-16.16T136-288.66v-383.01Q136-696 152.15-712t40.47-16h574.76q24.32 0 40.47 16.16t16.15 40.5v383.01Q824-264 807.85-248t-40.47 16H192.62Zm0-32H596v-135.38H168v110.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69ZM628-264h139.38q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-278.15H628V-264ZM168-431.38h428v-135.39H168v135.39Z" />
  </svg>
);
