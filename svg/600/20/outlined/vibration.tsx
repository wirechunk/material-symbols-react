import type { SVGProps } from "react";
export const SvgVibration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M0-360v-240h72v240H0Zm120 72v-384h72v384h-72Zm768-72v-240h72v240h-72Zm-120 72v-384h72v384h-72ZM338-144q-41 0-69.5-28.5T240-242v-476q0-41 28.5-69.5T338-816h284q41 0 69.5 28.5T720-718v476q0 41-28.5 69.5T622-144H338Zm0-98h284v-476H338v476Zm0 0v-476 476Z" />
  </svg>
);
