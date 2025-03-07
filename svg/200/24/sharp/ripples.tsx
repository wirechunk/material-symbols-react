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
    <path d="M200-200h560v-365.08q-18 11.77-38.12 18.43Q701.77-540 680-540q-58.31 0-99.15-40.85Q540-621.69 540-680q0-21.77 6.65-41.88Q553.31-742 565.08-760H200v560Zm-40 40v-640h640v640H160Zm40-600v560-560Z" />
  </svg>
);
