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
    <path d="M120-400v-160h720v160H120Zm440-40h240v-80H560v80Z" />
  </svg>
);
