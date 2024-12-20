import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm40-480h560v-120H200v120Zm560 40H200v400h560v-400Zm-560-40v40-40Zm0 0v-120 120Zm0 40v400-400Z" />
  </svg>
);
