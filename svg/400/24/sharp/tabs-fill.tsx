import type { SVGProps } from "react";
export const SvgTabsFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm80-80h560v-280H200v280Zm280-440h240v-80H480v80Z" />
  </svg>
);
