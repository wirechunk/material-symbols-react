import type { SVGProps } from "react";
export const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-168l377-377-72-72 41-41 92 92 166-166 128 128-166 166 92 92-41 41-72-72-377 377H120Zm60-60h87l355-355-87-87-355 355v87Zm463-420 124-124-43-43-124 124 43 43Zm0 0-43-43 43 43Z" />
  </svg>
);
