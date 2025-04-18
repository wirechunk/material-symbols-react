import type { SVGProps } from "react";
export const SvgEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M180-300v-100h600v100H180Zm0-260v-100h600v100H180Z" />
  </svg>
);
