import type { SVGProps } from "react";
export const SvgNewWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h320v80H200v560h560v-240h80v320H120Zm520-400v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z" />
  </svg>
);
