import type { SVGProps } from "react";
export const SvgEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M212-308v-100h536v100H212Zm0-244v-100h536v100H212Z" />
  </svg>
);
