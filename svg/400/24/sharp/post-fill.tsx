import type { SVGProps } from "react";
export const SvgPostFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm120-280h480v-80H240v80Zm0 120h480v-60H240v60Z" />
  </svg>
);
