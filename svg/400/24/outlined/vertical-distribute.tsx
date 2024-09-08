import type { SVGProps } from "react";
export const SvgVerticalDistribute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-80v-80h800v80H80Zm200-340v-120h400v120H280ZM80-800v-80h800v80H80Z" />
  </svg>
);
