import type { SVGProps } from "react";
export const SvgPostFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm80-262h560v-51H200v51Zm0 119h560v-41H200v41Z" />
  </svg>
);
