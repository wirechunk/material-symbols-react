import type { SVGProps } from "react";
export const SvgViewList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M136-304.38v-362.01q0-23.93 15.98-40.46t40.64-16.53h574.76q24.66 0 40.64 16.53T824-666.39v362.01q0 23.93-15.98 40.46-15.98 16.54-40.64 16.54H192.62q-24.66 0-40.64-16.54Q136-280.45 136-304.38Zm32-271h116v-116h-91.38q-10.77 0-17.7 6.92-6.92 6.92-6.92 17.69v91.39Zm148 0h476v-91.39q0-10.77-6.92-17.69-6.93-6.92-17.7-6.92H316v116Zm0 148h476v-116H316v116Zm0 148h451.38q10.77 0 17.7-6.93Q792-293.23 792-304v-91.38H316v116Zm-123.38 0H284v-116H168V-304q0 10.77 6.92 17.69 6.93 6.93 17.7 6.93Zm-24.62-148h116v-116H168v116Z" />
  </svg>
);
