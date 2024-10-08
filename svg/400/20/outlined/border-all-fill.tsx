import type { SVGProps } from "react";
export const SvgBorderAllFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M516-144v-300h300v300H516Zm0-372v-300h300v300H516Zm-372 0v-300h300v300H144Zm0 372v-300h300v300H144Z" />
  </svg>
);
