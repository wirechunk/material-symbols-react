import type { SVGProps } from "react";
export const SvgDraft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120v-720h380l180 180v540H200Zm360-520v-160H240v640h480v-480H560ZM240-800v160-160 640-640Z" />
  </svg>
);
