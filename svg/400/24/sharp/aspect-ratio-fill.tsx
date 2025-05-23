import type { SVGProps } from "react";
export const SvgAspectRatioFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M560-280h200v-200h-80v120H560v80ZM200-480h80v-120h120v-80H200v200ZM80-160v-640h800v640H80Z" />
  </svg>
);
