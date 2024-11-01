import type { SVGProps } from "react";
export const SvgWeekendFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M40-160v-400h160v240h560v-240h160v400H40Zm240-240v-240H160v-160h640v160H680v240H280Z" />
  </svg>
);
