import type { SVGProps } from "react";
export const SvgFunctions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-160v-80l260-240-260-240v-80h480v120H431l215 200-215 200h289v120H240Z" />
  </svg>
);
