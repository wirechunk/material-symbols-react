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
    <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" />
  </svg>
);
