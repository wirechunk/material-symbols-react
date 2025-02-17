import type { SVGProps } from "react";
export const SvgClarify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-280h280v-80H240v80Zm400 0h80v-400h-80v400ZM240-440h280v-80H240v80Zm0-160h280v-80H240v80ZM80-120v-720h800v720H80Zm80-80h640v-560H160v560Zm0 0v-560 560Z" />
  </svg>
);
