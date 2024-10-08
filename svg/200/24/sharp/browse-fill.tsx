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
    <path d="M160-160v-200h280v200H160Zm360 0v-360h280v360H520ZM160-440v-360h280v360H160Zm360-160v-200h280v200H520Z" />
  </svg>
);
