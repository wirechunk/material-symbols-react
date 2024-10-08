import type { SVGProps } from "react";
export const SvgLineStartArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M520-200 80-480l440-280v240h360v80H520v240Zm-80-146v-268L229-480l211 134Zm0-134Z" />
  </svg>
);
