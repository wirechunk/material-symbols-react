import type { SVGProps } from "react";
export const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-400v-200h30.77v169.23h498.46V-600H760v200H200Z" />
  </svg>
);
