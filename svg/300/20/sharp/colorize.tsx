import type { SVGProps } from "react";
export const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-164v-150.31l338.54-338.54-61.31-60.69 36.38-37.15 80.47 80.08 139.69-140.08 110.54 114.3-138.47 138.47 80.47 81.07-36.77 36.77-62.46-61.69L314.31-164H164Zm52-52h76.77l322.69-322.69-75.77-76.77L216-292.77V-216Zm413.23-374.23 106.16-107.16-38-39-107.16 106.54 39 39.62Zm0 0-39-39.62 39 39.62Z" />
  </svg>
);
