import type { SVGProps } from "react";
export const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M300-660v360-360Zm-60 420v-480h480v480H240Zm60-60h360v-360H300v360Z" />
  </svg>
);
