import type { SVGProps } from "react";
export const SvgMapFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m600-120-240-84-240 93v-647l240-82 240 84 240-93v647l-240 82Zm-40-98v-468l-160-56v468l160 56Z" />
  </svg>
);
