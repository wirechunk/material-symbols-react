import type { SVGProps } from "react";
export const SvgVariables = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-320v-320h640v320H160Zm40-40h560v-240H200v240Zm0 0v-240 240Z" />
  </svg>
);
