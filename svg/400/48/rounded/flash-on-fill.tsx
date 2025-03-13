import type { SVGProps } from "react";
export const SvgFlashOnFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M400-80v-320H280v-480h400l-80 280h160L400-80Z" />
  </svg>
);
