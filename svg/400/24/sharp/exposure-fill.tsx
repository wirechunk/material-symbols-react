import type { SVGProps } from "react";
export const SvgExposureFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm80-80h560v-560L200-200Zm380-40v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60ZM240-620h200v-60H240v60Z" />
  </svg>
);
