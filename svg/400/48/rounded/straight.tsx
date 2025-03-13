import type { SVGProps } from "react";
export const SvgStraight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M450-120v-606l-90 90-42-42 162-162 162 162-42 42-90-90v606h-60Z" />
  </svg>
);
