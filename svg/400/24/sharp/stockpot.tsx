import type { SVGProps } from "react";
export const SvgStockpot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-160v-480h720v480H120Zm80-80h560v-320H200v320Zm-80-440v-80h240v-80h240v80h240v80H120Zm360 280Z" />
  </svg>
);
