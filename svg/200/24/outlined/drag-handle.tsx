import type { SVGProps } from "react";
export const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-380v-40h560v40H200Zm0-160v-40h560v40H200Z" />
  </svg>
);
