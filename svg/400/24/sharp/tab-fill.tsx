import type { SVGProps } from "react";
export const SvgTabFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm440-400h280v-160H520v160Z" />
  </svg>
);
