import type { SVGProps } from "react";
export const SvgSliders = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-380v-200h760v200H100Zm460-60h240v-80H560v80Z" />
  </svg>
);
