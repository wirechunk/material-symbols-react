import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-200h560v-342q-18 11-38.5 16.5T680-520q-66 0-113-47t-47-113q0-21 5.5-41.5T542-760H200v560Zm-80 80v-720h720v720H120Zm80-640v560-560Z" />
  </svg>
);
