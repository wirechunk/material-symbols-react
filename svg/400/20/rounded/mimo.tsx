import type { SVGProps } from "react";
export const SvgMimo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-240q-29.7 0-50.85-21.15Q96-282.3 96-312v-432q0-29.7 21.15-50.85Q138.3-816 168-816h624q29.7 0 50.85 21.15Q864-773.7 864-744v432q0 29.7-21.15 50.85Q821.7-240 792-240H624l37 37q5 5 8 11.5t3 14.5q0 14.02-9.49 23.51Q653.03-144 639-144H320.53q-13.53 0-23.03-9.49-9.5-9.49-9.5-23.51 0-8 3-14.5t8-11.5l37-37H168Zm0-72h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
