import type { SVGProps } from "react";
export const SvgTv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-160v-80H120v-560h720v560H600v80H360ZM160-280h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
);
