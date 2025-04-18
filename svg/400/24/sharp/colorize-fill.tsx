import type { SVGProps } from "react";
export const SvgColorizeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-190l358-358-58-56 58-56 76 76 152-152 150 150-151 151 76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Z" />
  </svg>
);
