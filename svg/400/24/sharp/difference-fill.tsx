import type { SVGProps } from "react";
export const SvgDifferenceFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M500-520h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm-80 160h240v-80H420v80ZM240-200v-720h360l240 240v480H240ZM80-40v-640h80v560h440v80H80Z" />
  </svg>
);
