import type { SVGProps } from "react";
export const SvgWysiwygFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm80-80h560v-480H200v480Zm80-280v-80h400v80H280Zm0 160v-80h240v80H280Z" />
  </svg>
);
