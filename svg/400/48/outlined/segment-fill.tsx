import type { SVGProps } from "react";
export const SvgSegmentFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-240v-60h480v60H360Zm0-210v-60h480v60H360ZM120-660v-60h720v60H120Z" />
  </svg>
);
