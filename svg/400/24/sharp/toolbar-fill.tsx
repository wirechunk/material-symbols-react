import type { SVGProps } from "react";
export const SvgToolbarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-640v-200h720v200H120Zm0 520v-440h720v440H120Z" />
  </svg>
);
