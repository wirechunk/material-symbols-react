import type { SVGProps } from "react";
export const SvgSplitscreenLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h330v720H120Zm390 0v-720h330v720H510Zm270-660H570v600h210v-600Z" />
  </svg>
);
