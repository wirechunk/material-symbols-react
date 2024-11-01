import type { SVGProps } from "react";
export const SvgFitScreenFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M800-600v-120H680v-80h200v200h-80Zm-720 0v-200h200v80H160v120H80Zm600 440v-80h120v-120h80v200H680Zm-600 0v-200h80v120h120v80H80Zm160-160v-320h480v320H240Z" />
  </svg>
);
