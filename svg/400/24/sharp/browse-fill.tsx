import type { SVGProps } from "react";
export const SvgBrowseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-240h320v240H120Zm400 0v-400h320v400H520ZM120-440v-400h320v400H120Zm400-160v-240h320v240H520Z" />
  </svg>
);
