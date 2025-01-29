import type { SVGProps } from "react";
export const SvgStackGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-120v-240H120v-480h480v240h240v480H360Zm40-40h400v-400H560v-240H160v400h240v240Zm80-320Z" />
  </svg>
);
