import type { SVGProps } from "react";
export const SvgFlexNoWrap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M40-280v-400h240v400H40Zm320 0v-400h240v400H360Zm320 0v-400h240v400H680Zm-580-60h120v-280H100v280Zm640 0h120v-280H740v280Z" />
  </svg>
);
