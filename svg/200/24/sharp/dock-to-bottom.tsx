import type { SVGProps } from "react";
export const SvgDockToBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-200h560v-120H200v120Zm0-160h560v-400H200v400Zm0 40v120-120Zm-40 160v-640h640v640H160Z" />
  </svg>
);
