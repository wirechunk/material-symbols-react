import type { SVGProps } from "react";
export const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-120v-80h480v80H240Z" />
  </svg>
);
